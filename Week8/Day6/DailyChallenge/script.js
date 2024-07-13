// Previous exercises...

// New Exercise: All Truthy
// Instructions:
// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
  return args.every((arg) => !!arg);
}

// Test cases
console.log(allTruthy(true, true, true)); // Should return true
console.log(allTruthy(true, false, true)); // Should return false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // Should return false

// Additional test cases
console.log(allTruthy("hello", 1, [])); // Should return true
console.log(allTruthy(Boolean(true), Boolean(false))); // Should return false
console.log(allTruthy()); // Should return true (edge case: no arguments)
