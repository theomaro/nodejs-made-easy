# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / [os](./os.md) / [path](./path.md) / [fs](./file-system.md) / [events](./events.md) / [http](./http.md) / [stream](./stream.md) / process

### Process Module

The `process` object represent out application process which gives us everything we need to interact with a user.

```js
const process = require("process");
```

- Gives us information about the current process

  ```js
  const process = require("process");
  ```

- Used to receive input from and output information to the user

  ```js
  // listening to the data event on stdin stream
  process.stdin.on("data", function (chunk) {
    const input = chunk.toString()

    // exit the stream
    if (input == "quit") process.exit(0)
  });

  // print content into the command-line (no newline)
  process.stdout.write("Enter your name: ");
  ```

  - The applica
