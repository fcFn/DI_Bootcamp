// Exercise 1: Comparison
// Instructions:
// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
//    * the promise resolves if the argument is less than or equal to 10
//    * the promise rejects if argument is greater than 10.

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("Number is less than or equal to 10");
    } else {
      reject("Number is greater than 10");
    }
  });
}

// Test Exercise 1
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 2: Promises
// Instructions:
// 1. Create a promise that resolves itself in 4 seconds and returns a "success" string.

const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Test Exercise 2
delayedPromise.then((result) => console.log(result));

// Exercise 3: Resolve & Reject
// Instructions:
// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string "Boo!"

const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

// Test Exercise 3
resolvedPromise.then((value) => console.log(value));
rejectedPromise.catch((error) => console.log(error));
