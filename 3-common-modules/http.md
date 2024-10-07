# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / [os](./os.md) / [path](./path.md) / [fs](./file-system.md) / [events](./events.md) / HTTP / [stream](./stream.md) / [process](./process.md)

### HTTP Module

HTTP is a built-in module which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

Allow us to create server that listen to http requests on a given port. With this we can easily create a backend service for our client app

- An http server, is an event emitter having all the capabilities of EventEmitter class
- every time there is new connection, ity will raise an event, we use on() method to handle that event

  ```js
  const http = require("http");

  // create an HTTP server
  const server = http.createServer(),
    PORT = 3000;

  // register a event listener
  server.on("connection", (socket) => {
    console.log("New connection established...");
  });

  // listen to a connection event raised
  server.listen(PORT);
  console.log(`Listening on port ${PORT}...`);
  ```

> > Simple Node.js HTTP Server

- The function passed into the http.createServer(), will be executed when someone tries to access the server on specified port .
- include an HTTP header with the correct content type e.g. HTML

  ```js
  const http = require("http");

  const server = http
    .createServer(function (req, res) {
      switch (req.url.toLowerCase()) {
        case "/":
          res
            .writeHead(200, { "Content-Type": "text/plain" })
            .end("Welcome to Node.js Server!");
          break;
        case "/about":
          res
            .writeHead(200, { "Content-Type": "text/plain" })
            .end("About Node.js Server!");
          break;
        default:
          const body = `        <h1>Ooops!</h1>
        <p>It seems we can't find a page you're looking for.</p>
        <a href='/'>back home</a>
      `;
          res.writeHead(404, { "Content-Type": "text/html" }).end(body);
          break;
      }
    })
    .listen(3000);

  console.log("Server running at http://127.0.0.1:3000/");
  ```

> > Read the Query String

- `request` argument of the function `http.createServer()` has a property called `url` which holds the part of the url that comes after the domain name.

  ```js
  const http = require("http");

  // http://localhost:8080/summer
  http.createServer(function (req, res) {
    // => /summer
    res.write(req.url);
    res.end().listen(3000);
  });
  ```

Use a `URL` built-in module to easily split the query string into readable parts

- the url.parse() method, and it will return a URL object with each part of the address as properties

  ```js
  const http = require("http");
  const url = require("url");

  // http://localhost:8080/?year=2017&month=July
  http.createServer(function (req, res) {
    const queryStr = url.parse(req.url, true).query;

    // => 2017 July
    res.write(`${queryStr.year} ${queryStr.month}`);
    res.end().listen(3000);
  });
  ```

`NOTE`: In real-world applications we're not going to respond to a connection event to build an http service, instead we're going to work with actual response or request to build backend services for our client app by handling various route.
