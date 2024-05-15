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
