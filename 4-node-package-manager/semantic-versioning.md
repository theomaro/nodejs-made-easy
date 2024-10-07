# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Node Package Manager

[NPM](https://www.npmjs.com) is basically a command-line tool as well as a registry of third-party libraries we can add to our node applications.

[Home](../README.md) / [NPM Packages](./npm-packages.md) / Semantic Versioning / [Publishing Packages](./publish-package.md)

### Semantic Versioning

The version of a node package has three (3) components

- The first number is what we call major version
- The second number is what we call minor version
- The third number is what we call patch release

**Major Version**

- It is used to add new features that potentially break the existing API that depend upon the current version.
- When that feature is added, the developers will increase the major version

**Minor Version**

- It is used to add new features that don't break the existing API
- When the developers added that feature, they will increase only the minor version

**Patch Release**

- used for bug fixes
- When there is a bug fixes to a current version, the author will increase only the patch version
- zero (0) means no bug fixed, hence unstable version

### Keep Package Upto date

We can keep our application and all the package depend upon upto date by specifying what version to be installed.

**Using Exact Version**

- To get exactly version, simply remove curet or tilde character
- This means, we're preventing npm from updating a package to any newer version available

  ```json
  {
    "dependencies": {
      "mongoose": "6.8.1"
    }
  }
  ```

**Using newer minor version or patch release**

- Using a curet(^) character will tells npm that we're interested in any newer minor version or patch release as long as a major version is the same.

  ```json
  {
    "dependencies": {
      "mongoose": "^6.8.1" // 4.x.x
    }
  }
  ```

**Using newer patch release**

- Using a tilde(~) character will tells npm that we're interested in any newer patch release as long as the major and minor version are the same.

  ```json
  {
    "dependencies": {
      "underscore": "~1.13.6" // 1.13.x
    }
  }
  ```

### Listing the installed Packages

By listing the installed package will allow us know what version is actually installed

- List all global packages and their dependancies

  ```sh
  $ npm -g list
  ```

- List all local packages and their dependancies

  ```sh
  $ npm list
  ```

- List only dependencies to your application

  ```sh
  $ npm list --depth=0
  ```

### View Registry Info for a package

To learn about a given npm package and all it's metadata such as dependancies of that package etc

- View metadata

  ```sh
  $ npm view mongoose
  ```

- View only dependencies

  ```sh
  $ npm view mongoose dependancies
  ```

- View all available version

  ```sh
  $ npm view mongoose versions
  ```

### Install Specific Version

Sometimes we may what to install the specific version

- postfix the package name with a version separated by `@`symbol

  ```sh
  $ npm i mongoose@2.9.5
  ```

### Update local package

- Find out what packages have been outdated and their corresponding newer version

  ```sh
  $ npm outdated
  ```

- Update the packages to latest minor version

  ```sh
  $ npm update
  ```

- Update the packages to latest major version

  ```sh
  $ npm i -g npm-check-updates
  $ npm-check-updates
  $ npm install
  ```
