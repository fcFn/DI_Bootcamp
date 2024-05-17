// 🌟 Exercise 1: Your Favorite Food

// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate",
// and your favorite meal of the day is "dinner",
// you will console.log
// I eat chocolate at every dinner

const food = "pasta";
const meal = "dinner";

console.log(`I love eating ${food} at every ${meal}.`);
// 🌟 Exercise 2 : Series

// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;

const myWatchedSeriesSentence = myWatchedSeries.join(", ");

console.log(
  `I have watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}.`
);

myWatchedSeries[2] = "friends";

myWatchedSeries.push("Neon Genesis Evangelion".toLowerCase());

myWatchedSeries.unshift("Firefly".toLowerCase());

myWatchedSeries.splice(1, 1);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);

// 🌟 Exercise 3 : The Temperature Converter

// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsius = 42;

console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);

// 🌟 Exercise 4 : Guess The Answers #1

// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55 // Addition of a and b
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23 // Addition of a and b
// Actual: 23

console.log(c);
// Prediction: undefined // c is not assigned a value
// Actual: undefined

console.log(3 + 4 + "5");
// Prediction: 75 // Addition of 3 and 4, then concatenation of 7 and "5"
// Actual: 75

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.

// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String

typeof 15;
// Prediction: number // 15 is an integer number
// Actual: number

typeof 5.5;
// Prediction: number // 5.5 is a floating point number
// Actual: number

typeof NaN;
// Prediction: number // NaN is special type of a number
// Actual: number

typeof "hello";
// Prediction: string // "hello" is a string
// Actual: string

typeof true;
// Prediction: boolean // true is a boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean // 1 is not equal to 2
// Actual: boolean

"hamburger" + "s";
// Prediction: "hamburgers" // Concatenation of two strings
// Actual: "hamburgers"

"hamburgers" - "s";
// Prediction: NaN // Subtraction of two strings which is an invalid operation
// Actual: NaN

"1" + "3";
// Prediction: 13 // Concatenation of two strings
// Actual: 13

"1" - "3";
// Prediction: -2 // Subtraction of two strings which are coerced to numbers and then subtracted
// Actual: -2

"johnny" + 5;
// Prediction: johnny5 // Concatenation of a string and a number
// Actual: johnny5

"johnny" - 5;
// Prediction: NaN // Subtraction of a string and a number which is an invalid operation
// Actual: NaN

99 * "hello";
// Prediction: NaN // Multiplication of a number and a string which is an invalid operation
// Actual: NaN

1 != 1;
// Prediction: false // 1 is equal to 1
// Actual: false

1 == "1";
// Prediction: true // 1 is equal to "1" due to the implicit coercion
// Actual: true

1 === "1";
// Prediction: false // 1 is not equal to "1" due to the strict equality comparison
// Actual: false

// Exercise 6 : Guess The Answers #3

// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.

5 + "34";
// Prediction: 534 // Concatenation of a number which is coerced to a string and a string
// Actual: 534

5 - "4";
// Prediction: 1 // Subtraction of a number and a string which is coerced to a number
// Actual: 1

10 % 5;
// Prediction: 0 // Modulus of 10 and 5
// Actual: 0

5 % 10;
// Prediction: 5 // Modulus of 5 and 10
// Actual: 5

" " + " ";
// Prediction: "  " // Concatenation of two strings
// Actual: "  "

" " + 0;
// Prediction: " 0"  // Concatenation of a string and a number which is coerced to a string
// Actual: " 0"

true + true;
// Prediction: 2 // true is coerced to 1 and added to another 1
// Actual: 2

true + false;
// Prediction: 1 // true is coerced to 1 and added to 0
// Actual: 1

false + true;
// Prediction: 1 // false is coerced to 0 and added to 1
// Actual: 1

false - true;
// Prediction: -1 // false is coerced to 0 and 1 is subtracted from 0
// Actual: -1

!true;
// Prediction: false // Negation of true
// Actual: false

3 - 4;
// Prediction: -1 // Subtraction of 4 from 3
// Actual: -1
