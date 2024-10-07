# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / [os](./os.md) / [path](./stream.md) / [fs](./file-system.md) / [events](./events.md) / [http](./http.md) / stream / [process](./process.md)

### Stream

Stream allows us to work with streams of data i.e reading or writing data sequencially

- `Readable`: used reading data sequencially

  ```js
  const { createReadStream } = require("fs");

  const stream = createReadStream("../big.txt");

  //
  stream.on("data", function (result) {
    console.log(result);
  });

  //
  stream.on("error", function (err) {
    console.log(err);
  });
  ```

- `Writable`: used to writing data sequencially

  ```js

  ```

- `Duplex`: used to both read or write data sequencially

  ```js

  ```

- `Transform`: used to modify data while is being read or written

  ```js

  ```
