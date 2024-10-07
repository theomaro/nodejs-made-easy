# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / [os](./os.md) / [path](./path.md) / fs / [events](./events.md) / [http](./http.md) / [stream](./stream.md) / [process](./process.md)

### File System Module

With these we can work with files and directives.

Almost every operation defined in this module comes into two(2) forms blocking(sync) or non-blocking(async).

- Synchronous approach

  ```js
  const { readdirSync, readFileSync, writeFileSync } = require("fs");

  // get all the files and directories in a given path synchronously
  const files = readdirSync("./");
  // console.log(files);

  // get content of the file synchronously
  const fileContent = readFileSync("./file.txt", "utf8");
  console.log(fileContent);

  // create and write/overwrite to a file synchronously
  writeFileSync("file.txt", "writing new content synchronously");

  // append to a file synchronously
  writeFileSync("file.txt", "\nthis is a new line", { flag: "a" });
  ```

- Asynchronous approach

  ```js
  const {
    readdir,
    readFile,
    writeFile,
    appendFile,
    rename,
    unlink,
  } = require("fs");

  // get all the files and directories in a given path asynchronously
  readdir("./", function (err, result) {
    if (err) return;
    console.log(result);
  });

  // get content of the file asynchronously
  readFile("./file.txt", "utf8", function (err, result) {
    if (err) return;
    console.log(result);
  });

  // create and write/overwrite to a file asynchronously
  writeFile("file.txt", "writing new content asynchronously", function (err) {
    if (err) return;
  });

  // append to a file asynchronously
  writeFile("file.txt", "\nthis is a new line", { flag: "a" }, function (err) {
    if (err) return;
  });

  appendFile("mynewfile1.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  // delete a file
  unlink("mynewfile2.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
  });

  // rename a file
  rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
  });
  ```

`NOTE`: as the best practice always prefer to use **async operations**. This is because node process has single thread and it will not keep that thread busy.
