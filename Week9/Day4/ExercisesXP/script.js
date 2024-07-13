/*
Exercise 3: JSON Mario
Instructions:
1. Convert this JS object into a JSON object. What happens to the nested objects?
2. Convert and pretty print this JS object into a JSON object.
3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

Hint: Check out the JSON lesson on the platform.
*/

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1. Convert JS object to JSON
const jsonMarioGame = JSON.stringify(marioGame);
console.log("JSON object:", jsonMarioGame);
// The nested objects are converted to strings within the JSON structure

// 2. Convert and pretty print JS object to JSON
const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log("Pretty printed JSON object:");
console.log(prettyJsonMarioGame);

// 3. Use your web inspector to add a breakpoint and check the values in the debugger
// You can add a breakpoint on the line below in your browser's developer tools
debugger;
