// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter words separated by commas: ", words => {
  const longestWord = words.split(", ").reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");

  let topAndBottom = "";
  for (let i = 0; i < longestWord.length + 4; i++) {
    topAndBottom += "*";
  }

  console.log(topAndBottom);
  words.split(", ").forEach(word => {
    console.log(`* ${word.padEnd(longestWord.length)} *`);
  });
  console.log(topAndBottom);

  rl.close();
});
