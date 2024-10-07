# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Built-in Modules

Node comes with useful modules that are built into the core of Node. With these modules we can work with files, operating system, network and so on.

[Home](../README.md) / os / [path](./path.md) / [fs](./file-system.md) / [events](./events.md) / [http](./http.md) / [stream](./stream.md) / [process](./process.md)

### OS Module

With these we can work with operating system as well as server

- we can get information about current operating system

  ```js
  const os = require("os");

  // get info about current Operating System
  let platform = os.type();
  let platform = os.platform();
  let release = os.release();
  console.log(`Distro : ${release} - ${platform}`);

  // get total and free free amount of memory on machine
  let freeMemory = os.freemem();
  let totalMemory = os.totalmem();
  console.log(`Free : ${freeMemory}  \nTotal : ${totalMemory}`);

  //
  let homeDir = os.homedir(); //
  let hostName = os.hostname(); //
  console.log(`Host : ${hostName} \nHomeDir : ${homeDir}`);

  // get current user infomation
  let user = os.userInfo();
  console.log(`Username : ${user.username} \nHomeDir : ${user.homedir}`);

  // get the system uptime in seconds
  let upTimeInSecs = os.uptime();
  console.log(`The system uptime is ${upTimeInSecs} seconds`);
  ```
