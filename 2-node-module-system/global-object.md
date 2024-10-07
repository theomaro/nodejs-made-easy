# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Module System

In this section, we're going to look at module system in Node by exploring the common modules built-in of the core such as `path`, `fs`, `os`, `events`, and `http` etc.

[Home](../README.md) / Global Object / [Modules](./modules.md)

### Global Object

- The global objects are part of global scope and can be accessed them anywhere, in any file.

- There're bunch of objects and functions that are globally available as a part of standard JavaScript. for example...

  ```js
  console.log(); // output something to a console
  ```

  ```js
  console.log(__dirname); // gives a path to a current directory
  ```

  ```js
  console.log(__filename); // gives a file name
  ```

- In Node, we have couple of other global objects such as `global`, from which all the global objects and functions can be accessed from.

  ```js
  global.setTimeout(function () {}, 3000); // call a function after a delay
  ```

- `NOTE`: as the best practice we may use shorthand instead of prefixing them with `global` keyword

  ```js
  setInterval(function () {}, 3000); // call a funtion repeatedly after a delay
  ```

- In Node, any variable or function defined in a file are not part of the global object. They are only scoped to given file.

  ```js
  var message = "";
  console.log(global.message); // message is undefined
  ```
