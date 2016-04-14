'use strict';

var plan = require('flightplan');

// TODO: implement a rollback command

/**
 * Configuration
 * TODO: move config into separate node modules
 */

const serverConfig = {
  host: 'mattgerton.com',
  username: 'mgerton',
  agent: process.env.SSH_AUTH_SOCK
};

const targetProps = {
  webRoot: '/home/mgerton/preview.mattgerton.com'
};

// Factory function for config objects
function Config(options) {
  return Object.assign({}, serverConfig, options);
}

function TargetProps(options) {
  return Object.assign({}, targetProps, options);
}

const stagingConfig = Config();
const prodConfig = Config();

const stagingTargetProps = TargetProps();
const prodTargetProps = TargetProps({
  webRoot: '/home/mgerton/mattgerton.com'
});

plan.target('staging', stagingConfig, stagingTargetProps);
plan.target('production', prodConfig, prodTargetProps);

const ts = new Date().getTime();
const releaseDir = `mgerton-com-${ts}`;

// run commands on localhost
plan.local(function (local) {
  local.log('Copying files to remote hosts');

  // TODO: consider migrating from git ls-files to tags/branches
  const filesToCopy = local.exec('git ls-files src/', { silent: true });

  // rsync src/ to server
  local.transfer(filesToCopy, `/tmp/${releaseDir}`);
});

// run commands on the target's remote hosts
plan.remote(function (remote) {
  const env = plan.runtime.target;
  const webRoot = plan.runtime.options.webRoot.split('/').pop();

  remote.log('Creating symlink latest timestampped release');
  remote.exec(`mv /tmp/${releaseDir} /home/mgerton/website/${env}/`);
  remote.exec(`rm ${webRoot} && ln -s /home/mgerton/website/${env}/${releaseDir}/src ${webRoot}`);

  if (plan.runtime.target === 'staging') {
    remote.log('Generating robots.txt to prevent crawling');

    let robotsTxt = `
    User-agent: *
    Disallow: /`;

    let res = remote.exec(`echo "${robotsTxt}" > /home/mgerton/website/${env}/${releaseDir}/src/robots.txt`);

    if (res.code === 0) {
      remote.log('Successfully created robots.txt');
    }
  }

  remote.log('Deployment complete');
});
