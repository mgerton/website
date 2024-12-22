# MattGerton.com

This is the repository for [mattgerton.com](http://mattgerton.com), built using [Astro](https://astro.build).

## About this site

NOTE: This site is a work-in-progress and in semi-active development (when I have time and motivation to work on it). The initial plan is to build out the new homepage, then blog about my decision making progress as I build this out as a means of showcasing various technical skills. The site as of now is built using the aforementioned Astro as the primary framework with React as the underlying base, Tailwind for styling, and eventual plans for added features using other technology as needed.

## Running locally

### Prerequesites

At the time of writing, this repository currently relies on the following:

* Node.js (via NVM)
* pnpm

Install the specified LTS of Node using NVM:

```sh
$ nvm install --lts && nvm use
```
Then install pnpm following the [installation docs](https://pnpm.io/installation).

To run, simply run `pnpm dev`.

### Troubleshooting Installs and/or Startup

When all else fails, `rm -rf node_modules && pnpm install` is your best friend.

### Running with Deno

In an effort to simplify my life tech-wise, I am experimenting with different JS runtimes - namely, Deno and Bun. To run this app on Deno, all that is requireed is having Deno installed in the system in question (use the [deno docs](https://docs.deno.com/runtime/getting_started/installation/) to set this up) and then simply use the CLI to run it:

```sh
$ deno task dev
```

And things should work out just fine. Further Deno integration (ex. removing node_modules directory, etc.) is still exploratory at this time.

#### Running with Bun

Similar to Deno, first make sure Bun is installed (or [install it](https://bun.sh/docs/installation)), then attempt to install dependencies (if needed) and run using the CLI:

```sh
$ bun install
$ bun run dev
```

Note: Astro has [some docs](https://docs.astro.build/en/recipes/bun/) on running on Bun that can provide some additional support should it be needed.

## Deploying

Previously this site used a bespoke system using [Flightplan](https://github.com/pstadler/flightplan) that would connect to the server that currently runs my website and use some combination of SSH + Git magic to load the latest from the main branch. New deployment process is TBD but will likely leverage a combination of Astro's build + GitHub Actions to deploy somewhere, either the same shared host provider in-use today or to a new provider better optimized static hosting.
