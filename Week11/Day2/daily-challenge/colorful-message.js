const colorfulMessage = async (message) => {
  const {default: chalk} = await import('chalk');
  
  // Colors each letter and it background a random color
  const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'black', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgGray', 'bgBlack'];
  let coloredMessage = '';
  
  for (let i = 0; i < message.length; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    coloredMessage += chalk[randomColor](message[i]);
  }
  return coloredMessage;
}

module.exports = { colorfulMessage };
