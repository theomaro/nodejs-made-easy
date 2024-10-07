# Node.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## Getting Started

[Home](../README.md) / How web works / [What is node](./what-is-node.md) / [First Node program]()

![Client Server Relationship](../images)

### How Web Works

This section will explain how data is being exchanged through internet/web

- `client` (browser) send a HTTP request message to server

- `server` (Node/Express server) is responsible for handling those request and send back a HTTP response message i.e resources

- The process uses `HTTP protocol` which is why they are called HTTP Messages

`NOTE`: In this tutorial, we will be building Web Server using Node/Express

### How HTTP Messages are structured

The general structure for both messages is the same

- they both have `status code`:

  ```
  Status Code: 200 Ok
  ```

- They both have optional `header`: indicates the metadata that has been send

- They both have optional `body`:

**request message**

This is what user is sending to a server requesting for a specific resources.

- structure of http request message

  ```http
  HTTP-METHOD  URL HTTP-Version
               Headers
               Body (optional)

  GET /about HTTP/1.1
      Headers
      Body (optional)
  ```

- structure of http request header

  ```
  Pragma: no-cache
  Referer: https:www.web-api.com/
  ```

**response message**

The server is responsible for sending back to a user the requested resources as a response.

- structure of http response message

  ```
  HTTP-Version  STATUS-CODE  STATUS-TEXT
                Headers
                Body (optional)

  HTTP/1.1  200  OK
            Headers
            Body (optional)
  ```

- structure of http response header

  ```
  Content-Type: application/json; charset=utf-8
  ```

  or

  ```
  Content-Type: text/html; charset=utf-8
  ```

### HTTP Methods

**GET**: Read data

- `/api/products` get all products
- `/api/products/:id` get a specific single product

**POST**: Create data

- `/api/products` create a new product

**PUT**: Update data

- `/api/products/:id` update a specific product

**DELETE**: Delete data

- `/api/products` delete all products
- `/api/products/:id` delete a specific product
