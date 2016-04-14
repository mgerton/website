var plan = require('flightplan');

// TODO: implement a rollback command

// configuration
plan.target('staging', {
  host: 'mattgerton.com',
  username: 'mgerton',
  agent: process.env.SSH_AUTH_SOCK
}, {
  webRoot: '/home/mgerton/preview.mattgerton.com'
});

plan.target('production', {
  host: 'mattgerton.com',
  username: 'mgerton',
  agent: process.env.SSH_AUTH_SOCK
}, {
  webRoot: '/home/mgerton/mattgerton.com'
});

var ts = new Date().getTime();
var releaseDir = `mgerton-com-${ts}`;

// run commands on localhost
plan.local('package', function (local) {
  var filesToCopy;
  var env = plan.runtime.target;

  local.log('Copying files to remote hosts');
  // TODO: consider migrating from git ls-files to tags/branches
  filesToCopy = local.exec('git ls-files src/', { silent: true });

  // rsync src/ to server
  local.transfer(filesToCopy, `/tmp/${releaseDir}`);
});

// run commands on the target's remote hosts
plan.remote('deploy', function (remote) {
  var env = plan.runtime.target;
  var webRoot = plan.runtime.options.webRoot.split('/').pop();

  remote.log('Creating symlink latest timestampped release');
  remote.exec(`mv /tmp/${releaseDir} /home/mgerton/website/${env}/`);
  remote.exec(`rm ${webRoot} && ln -s /home/mgerton/website/${env}/${releaseDir}/src ${webRoot}`);
  remote.log('Deployment complete.');
});
