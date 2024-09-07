
async function main() {
  const {colorfulMessage} = await import ('./colorful-message.js');
  console.log(await colorfulMessage("Hello World!"));
}

main().then(() => {})
