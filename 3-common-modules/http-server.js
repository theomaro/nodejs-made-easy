const http = require("node:http");

const hostname = "127.0.0.1";
const PORT = 3000;

const courses = require("./db.json");

const server = http.createServer((req, res) => {
  switch (req.url.toLowerCase()) {
    // server regular website
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <h1>Welcome!</h1>
        <a href="/about">About</a>
        <a href="/api/courses">get api data</a>
        `);
      res.end();
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <h1>About Us!</h1>
        <a href="/">Home</a>
        <a href="/api/courses">get api data</a>
        `);
      res.end();
      break;

    // server api endpoint
    case "/api/courses":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(courses));
      res.end();
      break;

    // server plain text
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("page not found");
      res.end();
  }
});

// listen to a connection event raised
server.listen(PORT, hostname, () => {
  console.log(`Server running at ${hostname}:${PORT}`);
});
