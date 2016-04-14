# My Website
This is the repository for [mattgerton.com](http://mattgerton.com).

## Running locally

Currently, repo runs off of node 4.2.4. Check `.nvmrc` for correct version before installing global modules (Gulp, Flightplan) or install version if needed.

To install/use:

    $ nvm install 4.2.4
	$ nvm use 4.2.4
    $ npm install -g gulp flightplan

To run:

    $ cd /path/to/repo
    $ nvm use
    $ npm install
    $ gulp serve

## Deploying

If [Flightplan](https://github.com/pstadler/flightplan) is installed globally, use `fly`, otherwise use `node_modules/.bin/fly` to run commands. Current environments are `staging` and `production`. **Make sure changes are committed and pushed prior to deployment; script relies on `git ls-files` to determine what should be deployed.**

    $ fly <env>
