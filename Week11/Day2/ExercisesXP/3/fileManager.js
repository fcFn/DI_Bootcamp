// Exercise 3: File Management using CommonJS syntax
//
// Instructions:
// 1. Create a file named fileManager.js.
// 2. Inside fileManager.js, define a module that exports functions for reading and writing files.
// 3. Export functions named readFile and writeFile.
// 4. Implement the readFile function to read the content of a specified file using the fs module.
// 5. Implement the writeFile function to write content to a specified file using the fs module.
// 6. Create a file "Hello World.txt" containing the sentence "Hello World !! "
// 7. Create a file "Bye World.txt" containing the sentence "Bye World !! "
// 8. Create another file named app.js.
// 9. In app.js, import the functions from the fileManager.js module.
// 10. Use the imported functions to read the content of the "Hello World.txt" text file and then write to the "Bye World.txt" with the content "Writing to the file".
// 11. Run app.js and verify that the file reading and writing operations are successful

const fs = require('fs');

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

module.exports = { readFile, writeFile };
