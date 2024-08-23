// Exercise 7: Reading and Copying Files
//
// Instructions:
// 1. Create a directory named file-explorer.
// 2. Inside the file-explorer directory, create a file named copy-file.js.
// 3. In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
// 4. Create another file named read-directory.js.
// 5. In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
// 6. Open a terminal in the file-explorer directory.
// 7. Run node copy-file.js to copy the content from source.txt to destination.txt.
// 8. Run node read-directory.js to list the files in the directory.

const fs = require('fs');

const sourceContent = fs.readFileSync('source.txt', 'utf8');
fs.writeFileSync('destination.txt', sourceContent);
console.log('File copied successfully!');
