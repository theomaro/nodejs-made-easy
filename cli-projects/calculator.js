const process = require("process");

// listening to the data event on stdin stream
process.stdin.on("data", function (chunk) {
  const input = chunk.toString().trim();

  // exit the stream
  if (input === "quit") {
    process.exit(0);
  }

  try {
    const value = eval(input);
    console.log(value);
  } catch (error) {
    console.log("I don't know how to do that");
  }

  process.stdout.write("Enter your equation: ");
});

// print content into the command-line (no newline)
process.stdout.write("Enter your equation: ");
