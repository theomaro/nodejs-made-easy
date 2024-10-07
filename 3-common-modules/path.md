# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / [os](./os.md) / path / [fs](./file-system.md) / [events](./events.md) / [http](./http.md) / [stream](./stream.md) / [process](./process.md)

### Path Module

Gives us a bunch of utility functions for working with files and directory paths.

- It can be accessed using:

  ```js
  const path = require("path");

  // get platform specific separator
  let separator = path.sep;
  console.log(separator);

  // join a siquence path segment of using that specific separator
  // returns normalized path
  let filePath = path.join("supdir", "subdir", "file.txt");
  console.log(filePath);

  // get last portion of file path i.e filename + extension
  let basePath = path.basename(filePath);
  console.log(basePath);

  // get a directory name of the path
  console.log(path.dirname(filePath));

  // get extension of the path
  console.log(path.extname(filePath));

  // get a platform-specific file delimiter. ';' or ':'.
  let delimeter = path.delimiter;
  console.log(delimeter);

  // get an absolute path
  let absPath = path.resolve(__dirname, filePath)
  console.log(absPath);

  // get an object from a path string
  let pathObj = path.parse(__filename);
  console.log(pathObj);

  let res = path.
  ```
