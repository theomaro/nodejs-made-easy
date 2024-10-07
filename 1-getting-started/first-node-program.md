# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Getting Started

[Home](../README.md) / [How web works](./how-web-works.md) / [What is node](./what-is-node.md) / First Node program

![Picture](../images/node-download.png)

### Installation

- Check if node is already installed on your machine or not

  ```sh
  $ node --version
  v18.12.1
  ```

- if not, download the recommended latest stable version from [Node JS](https://nodejs.org/en/) homepage website.

### Ways to run node application

- Using REPL
- Executing JavaScript file

#### Using REPL

The REPL feature provide an interactive enviroment used for experimentation

```sh
$ node
```

#### Executing JavaScript file

```sh
$ node filename.js
```

### First Node Program

- create a file and write your first node program inside it

  ```js
  function sayHello(name) {
    console.log("Hello " + name);
  }

  sayHello("Jose");
  ```

- open the ternimal, run a node and passing a name of a file as an argument

```sh
$ node 1-getting-started/hello
Hello Jose
```
