# MattGerton.com

This is the repository for [mattgerton.com](http://mattgerton.com), built using [Astro](https://astro.build).

## About this site

NOTE: This site is a work-in-progress and in semi-active development (when I have time and motivation to work on it). The initial plan is to build out the new homepage, then blog about my decision making progress as I build this out as a means of showcasing various technical skills. The site as of now is built using the aforementioned Astro as the primary framework with React as the underlying base, Tailwind for styling, and eventual plans for added features using other technology as needed.

## Running locally

Install a current LTS version of Node first (`v20.x` at the time of this writing) using your tool of choice (I prefer NVM):

```sh
$ nvm install --lts
$ nvm use
$ npm ci  # to ensure stable installations before upgrading packages
$ npm run dev
```

On a fresh installs, there might be Node-related utils to install beforehand - something to be aware of.

### Troubleshooting Installs and/or Startup

When all else fails, `rm -rf node_modules && npm ci` is your best friend.

## Deploying

Previously this site used a bespoke system using [Flightplan](https://github.com/pstadler/flightplan) that would connect to the server that currently runs my website and use some combination of SSH + Git magic to load the latest from the main branch. New deployment process is TBD but will likely leverage a combination of Astro's build + GitHub Actions to deploy somewhere, either the same shared host provider in-use today or to a new provider better optimized static hosting.
