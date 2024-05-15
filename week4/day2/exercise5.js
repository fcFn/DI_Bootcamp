function changeEnough(itemPrice, amountOfChange) {
  const change = [0.25, 0.1, 0.05, 0.01];
  const sumOfChange = amountOfChange.reduce(
    (acc, val, index) => acc + val * change[index],
    0
  );
  if (sumOfChange >= itemPrice) {
    return true;
  }
  return false;
}

testCases = [
  { input: [2.99, [3, 2, 0, 3]], expected: false },
  { input: [14.11, [2, 150, 0, 0]], expected: true },
  { input: [0.75, [0, 0, 20, 5]], expected: true },
];

for (testCase of testCases) {
  const result = changeEnough(...testCase.input);
  if (result === testCase.expected) {
    console.log("Test case passed!");
  } else {
    console.log("Test case failed!");
  }
}
