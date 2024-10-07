# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.## Node Module System

[Home](../README.md) / [os](./os.md) / [path](./path.md) / [fs](./file-system.md) / events / [http](./http.md) / [stream](./stream.md) / [process](./process.md)

### Events Module

An event is a signal indicates that something has happened. In our Node app we may want to respond to those events. Different classes in node raise different kind of events.

- emitter function i.e `emit()` raise an event while listener function i.e `on()` listen to a raised event.

`NOTE`: The name of the event must match both in emmiter and listener functions

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// register a listener
emitter.on("response", () => {
  console.log("Listener called");
});

// raise that event
emitter.emit("response");
```

`NOTE`: Order matters, that is the listener must be registered first before calling the emit method

**Register multiple logic**

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// register multiple functions to the same event listener
emitter.on("response", () => {
  console.log("response is sent");
});

emitter.on("response", () => {
  console.log("second response is sent");
});

emitter.emit("response");
```

**Event arguments**

allows us to pass data about an event that just happened

- when raising an event, we might also want to send some data about that event such as message id, url
- the registered listener can also receive those event arguments

  ```js
  // register a listener with event arguments
  emitter.on("logging", (arg) => {
    console.log(arg.message);
  });

  // raise an event with event arguments
  emitter.emit("logging", { message: "logging an event" });
  ```

**Extending EventEmitter**

instead of working with EventEmitter class directly, we may want to create something custom.

- create a new class that extends all the capabilities of EventEmitter

  ```js
  const EventEmitter = require("events");

  class Logger extends EventEmitter {
    log(message) {
      this.emit("messageLogged", { id: 1, url: "http://" });
      console.log(message);
    }
  }

  module.exports = Logger;
  ```

- accessing an extended Logger class in app.js

  ```js
  const Logger = require("./logger");

  const logger = new Logger();

  logger.on("messageLogged", (arg) => {
    console.log("Listener called at", arg.url);
  });
  logger.log("The message is logged here");
  ```
