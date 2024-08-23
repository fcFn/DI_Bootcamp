// Exercise 5: Creating and Using a Custom Module
//
// Instructions:
// 1. Create a directory named math-app.
// 2. Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the lodash package, a utility library, by running npm install lodash in the terminal.
// 4. Create a file named math.js inside the math-app directory.
// 5. In math.js, define a simple custom module that exports functions for addition and multiplication.
// 6. Create a file named app.js in the same directory.
// 7. In app.js, require the lodash package and the custom math module.
// 8. Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
// 9. Run app.js using Node.js and verify that the calculations are correct.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply
}
