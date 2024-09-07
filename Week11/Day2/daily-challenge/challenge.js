const {greet} = require('./greeting.js');
const {readFile} = require('./files/read-file.js');

async function main() {
  const colorfulMessage = await import ('./colorful-message.js');
  console.log(greet("User"));
  console.log(readFile());
  console.log(await colorfulMessage.colorfulMessage("Hello World!"));
}

main().then(() => {})
