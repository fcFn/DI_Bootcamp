// Exercise 1: Multiple Exports and Import using CommonJS syntax
//
// Instructions:
// 1. Create a file named products.js.
// 2. Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
// 3. Export this array using the Common JS syntax.
// 4. Create another file named shop.js.
// 5. In shop.js, require the product objects from the products.js module.
// 6. Create a function that takes a product name as a parameter and searches for the corresponding product object.
// 7. Call this function with different product names and print the details of the products.
// 8. Run shop.js and verify that the correct product details are displayed.

const products = require('./products');

function findProduct(productName) {
  return products.find(product => product.name.toLowerCase() === productName.toLowerCase());
}

console.log(findProduct('Laptop'));
console.log(findProduct('Book'));
console.log(findProduct('Coffee Mug'));
