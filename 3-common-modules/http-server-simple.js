const http = require("http");
const PORT = 3000;

const courses = [
  {
    id: 1,
    name: "fullstack web development",
    price: 300,
    duration: "3 weeks",
  },
  {
    id: 2,
    name: "Mobile app development",
    price: 350,
    duration: "3 weeks",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify(courses));
    res.end();
  }
});

// listen to a connection event raised
server.listen(PORT);
console.log(`Listening on port ${PORT}...`);
