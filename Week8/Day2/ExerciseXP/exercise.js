// **🌟 Exercise 1 : Find The Sum**
// **Instructions**
// 1. Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;

// **🌟 Exercise 2 : Kg And Grams**
// **Instructions**
// Create a function that receives a weight in kilograms and returns it in grams. (**Hint:** 1 kg is 1000gr)
// 1. First, use function declaration and invoke it.
// 2. Then, use function expression and invoke it.
// 3. Write in a one line comment, the difference between function declaration and function expression.
// 4. Finally, use a one line arrow function and invoke it.

// Function declaration
function kgToGrams1(kg) {
  return kg * 1000;
}
console.log(kgToGrams1(2));

// Function expression
const kgToGrams2 = function (kg) {
  return kg * 1000;
};
console.log(kgToGrams2(2));

// Function declarations are hoisted, function expressions are not.

// Arrow function
const kgToGrams3 = (kg) => kg * 1000;
console.log(kgToGrams3(2));

// **🌟 Exercise 3 : Fortune Teller**
// **Instructions**
// 1. Create a self invoking function that takes 4 arguments: number of children, partner's name, geographic location, job title.
// 2. The function should display in the DOM a sentence like `"You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."`

(function (numChildren, partnerName, location, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  document.body.innerHTML += `<p>${sentence}</p>`;
})(2, "Alice", "New York", "developer");

// **🌟 Exercise 4 : Welcome**
// **Instructions**
// John has just signed in to your website and you want to welcome him.
// 1. Create a Bootstrap Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (username) {
  const navbar = document.querySelector(".navbar-nav");
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `
        <img src="https://placehold.co/100x100" alt="${username}'s profile" style="width: 30px; height: 30px; border-radius: 50%;">
        <span>Welcome, ${username}!</span>
    `;
  navbar.appendChild(userDiv);
})("John");

// **🌟 Exercise 5 : Juice Bar**
// **Instructions**
// You will use nested functions, to open a new juice bar.
// **Part I:**
// 1. The outer function named `makeJuice` receives 1 argument: the size of the beverage the client wants - small, medium or large.
// 2. The inner function named `addIngredients` receives 3 ingredients, and displays on the DOM a sentence like `The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>"`.
// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// **Part II:**
// 1. In the `makeJuice` function, create an empty array named `ingredients`.
// 2. The `addIngredients` function should now receive 3 ingredients, and push them into the `ingredients` array.
// 3. Create a new inner function named `displayJuice` that displays on the DOM a sentence like `The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>"`.
// 4. The client wants 6 ingredients in his juice, therefore, invoke the `addIngredients` function TWICE. Then invoke once the `displayJuice` function. Finally, invoke the `makeJuice` function in the global scope.

function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  addIngredients("apple", "banana", "strawberry");
  addIngredients("kiwi", "mango", "pineapple");
  displayJuice();
}

makeJuice("large");
