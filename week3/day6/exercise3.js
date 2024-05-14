do {
  var number = prompt("Enter a number");
  if (number === null) break;
  number = parseInt(number);
} while (number < 10 || isNaN(number));

/* Node.js code to run in the terminal
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter a number\n",
});

rl.prompt();

rl.on("line", line => {
  if (line === null) {
    rl.close();
    process.exit(0)
    return;
  }
  const number = parseInt(line);
  if (number > 10) {
    rl.close();
    process.exit(0);
  }
  rl.prompt();
});
*/
