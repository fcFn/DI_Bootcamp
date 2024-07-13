// Instructions:
// Using this object :

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1. Create an arrow function named displayGroceries
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

// 2. Create another arrow function named cloneGroceries
const cloneGroceries = () => {
  // Create a variable named user that is a copy of the client variable
  let user = client;

  // Change the client variable to "Betty"
  client = "Betty";
  // The user variable will still be "John" because strings are passed by value
  console.log("user:", user); // Output: John
  console.log("client:", client); // Output: Betty

  // Create a variable named shopping that is equal to the groceries variable
  let shopping = groceries;

  // Change the value of the totalPrice key to 35$
  shopping.totalPrice = "35$";
  // We will see this modification in the shopping object because objects are passed by reference
  console.log("shopping.totalPrice:", shopping.totalPrice); // Output: 35$
  console.log("groceries.totalPrice:", groceries.totalPrice); // Output: 35$

  // Change the value of the paid key to false
  shopping.other.paid = false;
  // We will see this modification in the shopping object because objects are passed by reference
  console.log("shopping.other.paid:", shopping.other.paid); // Output: false
  console.log("groceries.other.paid:", groceries.other.paid); // Output: false
};

// 3. Invoke the cloneGroceries function
cloneGroceries();
