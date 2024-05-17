// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence..


function replaceNotBad(str) {
  let notIndex = str.indexOf("not");
  let badIndex = str.indexOf("bad");
  if (notIndex === -1 || badIndex === -1) {
    return str;
  }

  if (notIndex < badIndex) {
    return str.substring(0, notIndex) + "good" + str.substring(badIndex + 3);
  } else {
    return str;
  }
}

const testCases = [
  {
    input: "This dinner is not that bad! I like it!",
    expected: "This dinner is good! I like it!",
  },
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
    input: "This dinner is not good. No, it's not quite sbad!",
    expected: "This dinner is not good. No, it's not quite sbad!",
  },
];

const sentence = "The movie is not that bad, I like it";
console.log(replaceNotBad(sentence));

// Testing the function with the test cases

/* let numPasses = 0;
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
console.log(`${numPasses}/${testCases.length} test cases passed.`) */
