const colors = ["red", "green", "blue", "black", "purple"];

const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

