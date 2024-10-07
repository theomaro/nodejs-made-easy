# Node.js Made Easy

This is a comprehensive and up-to-date Node.js course for tutorial documentation back-end developers

## Node Package Manager

[NPM](https://www.npmjs.com) is basically a command-line tool as well as a registry of third-party libraries we can add to our node applications.

[Home](../README.md) / NPM Packages / [Semantic Versioning](./semantic-versioning.md) / [Publishing Packages](./publish-package.md)

### Installation

The way we add those node modules to our application is via command-line tool called `npm` which ship along with node

#### npm cli

- Check if npm is installed

```sh
  $ npm --version
```

- Install npm specific version (globally)

```sh
  $ sudo npm i -g npm@8.19.2
```

#### Package.json file

This is a json file that include basic information(metadata) about your project/application such as its name, version number, authors, address of its git reposiory, its dependancies and so on.

`NOTE`: Before adding any node packages to your application, you need to create package.json file

- Initializing the project folder and add package.json file

  ```sh
  $ npm init -y
  ```

- We can easily restore versions of the dependencies on any machine. NPM will look at package.json file and will download and install those dependencies for us.

  ```sh
  $ npm install
  ```

`NOTE`: As the best practice we should exclude the node modules folder from our source control repositories.

- using `git`, add `.gitignore` file from which will list all files and folder to be excluded.

### Working with NPM Packages

#### Local Packages

These global packages only be used specific to a node application

- install a third-partly libraries to your node application

  ```sh
  $ npm i underscore
  ```

- load and use an installed package to your node application

  ```js
  // load a module
  const _ = require("underscore");

  // use a module
  var result = _.contains([1, 2, 3, 4], 2);
  console.log(result);
  ```

- Remove a no longer required package from a node application

  ```sh
  $ npm un underscore
  ```

#### Global Packages

These global packages are not specific to a node application and we can access them from anywhere

- To install global package simply add `-g` flag

  ```sh
  $ npm i -g nodemon
  ```

- To uninstall global package simply add `-g` flag

  ```sh
  $ npm un -g nodemon
  ```

- `NOTE`: All other commands work the same as a local packages

### Node Package Dependencies

#### Application Dependencies

These are all package dependancies that our application needs in order to function properly. These packages must ship with other packages that it depend upon.

- install appDependencies

  ```sh
  $ npm i mongoose --save
  ```

- In package.json

  ```json
  {
    "dependencies": {
      "mongoose": "^6.8.1"
    }
  }
  ```

- `NOTE`: When install a node package, that package may ship with other packages that it depend upon.

#### Development Dependencies

These are packages that only used during development such as running unit test.

They should not go into production enviroment where we deploy our application

- install devDependencies

```sh
$ npm i jshint --save-dev
```

- In package.json

```json
{
  "devDependencies": {
    "jshint": "^1.13.6"
  }
}
```

- `NOTE`: They should not go into production enviroment where we deploy our application.
