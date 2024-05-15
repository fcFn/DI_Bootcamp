function isDivisible(divisor) {
  let numbers = [];
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i)
    }
  }
  console.log("Outcome: ", numbers.join(" "));
  console.log("Sum: ", numbers.reduce((acc, val) => acc + val, 0))
}

isDivisible(23);
isDivisible(100);
