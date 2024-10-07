const fs = require("fs");
const path = require("path");
const { text } = require("stream/consumers");

// a function get a path to a file
const getFilePath = () => path.join(process.cwd(), "sample.txt");

// a function that write text to a file
function writeToFile(filePath, _content) {
  fs.writeFileSync(filePath, _content);
}
text = "This is a sample text";
writeToFile(getFilePath(), text);

// a function that read text from a file
const readFileContent = (filePath) => fs.readFileSync(filePath).toString();
const fileContent = readFileContent(getFilePath());
console.log(fileContent);
