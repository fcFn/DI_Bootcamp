// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?


// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// 🌟 Exercise 1 : Scope
// Predictions and explanations:

// #1
// Inside funcOne, the alert will show "inside the funcOne function 3" because a is re-assigned to 3 within the function scope.

// #1.1 - If the variable is declared with const instead of let, there will be an error if we try to reassign a to 3, because const variables cannot be reassigned.

// #2
// The first call to funcThree will alert "inside the funcThree function 0" because a is initially 0.
// After funcTwo is called, a is set to 5.
// The second call to funcThree will alert "inside the funcThree function 5".

// #2.2 - If the variable is declared with const instead of let, there will be a syntax error because const variables cannot be reassigned.

// #3
// After funcFour is called, a is set to "hello" on the window/global object.
// funcFive will alert "inside the funcFive function hello".

// #4
// funcSix will alert "inside the funcSix function test" because a is shadowed within the function scope by let a = "test".

// #4.2 - If the variable inside funcSix is declared with const instead of let, the behavior is the same. It's still a local scope variable shadowing the outer scope variable.

// #5
// The alert inside the if block will show "in the if block 5" because a is re-declared and assigned within the block scope.
// The alert outside of the if block will show "outside of the if block 2" because the outer scope's a is not affected by the re-declaration inside the if block.

// #5.2 - If the variable inside the if block is declared with const instead of let, the behavior is the same. The const variable is block-scoped.

// 🌟 Exercise 2 : Ternary Operator
const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// 🌟 Exercise 3 : Is It A String ?
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// 🌟 Exercise 4 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => console.log(`${index + 1}# choice is ${color}.`));

console.log(colors.includes("Violet") ? "Yeah" : "No...");

// 🌟 Exercise 5 : Colors #2
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let order = (index + 1) + (ordinal[(index + 1) % 10] || 'th');
    console.log(`${order} choice is ${color}.`);
});

// Exercise 6 : Bank Details
const bankAmount = 1000; // Global variable, not expected to change.
const VAT = 0.17; // VAT percentage, constant value.
let details = ["+200", "-100", "+146", "+167", "-2900"]; // Monthly expenses, could potentially add/remove items, hence let.

let modifiedExpenses = details.map(expense => {
    let number = parseFloat(expense);
    return (number + number * VAT).toFixed(2);
});

let finalAmount = bankAmount + modifiedExpenses.reduce((acc, curr) => acc + parseFloat(curr), 0);
console.log(`Final bank amount: ${finalAmount}`);
