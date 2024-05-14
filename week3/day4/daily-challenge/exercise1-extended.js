function replaceNotBad(str) {
  let notIndex = str.indexOf("not");
  let badIndex = str.indexOf("bad");
  if (notIndex === -1 || badIndex === -1) {
    return str;
  }
  const notIndexes = getAllWordIndexes(str, "not");
  const badIndexes = getAllWordIndexes(str, "bad");
  // the easy case as in the original assignment
  // the more complex case where there are multiple "not" and "bad" words
  // remove unmatched "not" and "bad" words
  while (notIndexes.length !== badIndexes.length) {
    if (notIndexes.length > badIndexes.length) {
      notIndexes.shift();
    } else {
      if (badIndexes[0] < notIndexes[0]) {
        badIndexes.shift();
      } else {
        badIndexes.pop();
      }
    }
  }
  notIndexes.forEach(function (notIndex, index) {
    if (notIndex < badIndexes[index]) {
      str =
        str.substring(0, notIndex) +
        "good" +
        str.substring(badIndexes[index] + 3);
      if (this[index + 1] !== undefined) {
        this[index + 1] = this[index + 1] - 3;
        badIndexes[index + 1] = badIndexes[index + 1] - 3;
      }
    }
  }, notIndexes);
  return str;
}

function getAllWordIndexes(str, word) {
  const indexes = [];
  let index = str.indexOf(word);
  while (index !== -1) {
    indexes.push(index);
    index = str.indexOf(word, index + 1);
  }
  return indexes;
}

const testCases = [
  {
    input: "This dinner is not that bad! I like it!",
    expected: "This dinner is good! I like it!",
  },
  { input: "This movie is ridiculous", expected: "This movie is ridiculous" },
  { input: "This movie is not so bad!", expected: "This movie is good!" },
  { input: "This dinner is bad!", expected: "This dinner is bad!" },
  { input: "This movie is bad!", expected: "This movie is bad!" },
  { input: "This dinner is not bad!", expected: "This dinner is good!" },
  { input: "This movie is not bad!", expected: "This movie is good!" },
  {
    input: "This movie is not bad and the dinner is not so bad either!",
    expected: "This movie is good and the dinner is good either!",
  },
  {
    input: "This movie is not bad, but the dinner is bad!",
    expected: "This movie is good, but the dinner is bad!",
  },
  {
    input: "This dinner is bad. No, it's not bad!",
    expected: "This dinner is bad. No, it's good!",
  },
  {
    input: "This dinner is not good. No, it's not quite bad!",
    expected: "This dinner is not good. No, it's good!",
  },
  {
    // This fails because we do not consider words that are not "bad"
    // but contain "bad" as a substring
    input: "This dinner is not good. No, it's not quite sbad!",
    expected: "This dinner is not good. No, it's not quite sbad!",
    notImplemented: true,
  },
];

let numPasses = 0;
testCases.forEach((testCase, index) => {
  const result = replaceNotBad(testCase.input);
  if (result === testCase.expected) {
    console.log(`✅ Test case #${index + 1} passed!`);
    numPasses++;
  } else {
    console.log(
      `❌ Test #${index + 1} case ${
        testCase.notImplemented ? "(not implemented yet!) " : ""
      }failed!\nExpected: ${testCase.expected}\nGot:      ${result}`
    );
  }
});
console.log(`${numPasses}/${testCases.length} test cases passed.`);
