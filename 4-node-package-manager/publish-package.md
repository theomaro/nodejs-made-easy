# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Node Package Manager

[NPM](https://www.npmjs.com) is basically a command-line tool as well as a registry of third-party libraries we can add to our node applications.

[Home](../README.md) / [NPM Packages](./npm-packages.md) / [Semantic Versioning](./semantic-versioning.md) / Publishing Packages

### Publishing a Packages

We can own node packages and publish them on NPM Registry

- make a folder project(use unique name)

  ```zsh
  $ mkdir lion-lib
  $ cd lion-lib
  ```

- initialize a node project

  ```zsh
  $ npm init -y
  ```

- add index.js as entry point to our pakage

  ```js
  module.exports.add = (a, b) => a + b;
  ```

- login to NPM Registry

  ```zsh
  $ npm login
  ```

- publish the package

  ```zsh
  $ npm publish
  ```

### Updating a Published Packages

Depending on the kind of change we made, we need to update version number and NPM will update the version correspondingly.

- if there is only bux fixing and no new feature added, only the patch release will be changed

  ```js
  $ npm version patch
  ```

- if a new feature added does not break our application program, only the minor version will be changed

  ```js
  $ npm version minor
  ```

- if a new features added does break our application program, the major version will be changed

  ```js
  $ npm version major
  ```

Finally

- we need to publish that new version on npm registry

  ```js
  $ npm publish
  ```
