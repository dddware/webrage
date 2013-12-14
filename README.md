webrage
=======

Web technology hatred extinguisher.

## Installation

Make sure you have node.js, npm and grunt-cli installed.

```shell
npm install
bower install
```

## Development

`grunt` will run a watch on source files and start a Connect server on port 9001 with live reloading enabled. And run your browser there for you. You're welcome.

## Deployment

`grunt dist` builds the production-ready site (with minified assets and shit). Make sure to run it before you commit changes so only production assets are kept on the repository.

## TODO

- no jquery
- refactor && write tests for js code