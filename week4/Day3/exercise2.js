const div = document.getElementById("container");
const div2 = document.querySelector("div");

console.log(div === div2); // true!

const uls = document.querySelectorAll("ul");
const uls2 = document.querySelectorAll(".list");

console.log(JSON.stringify(uls) === JSON.stringify(uls2)); // true!

uls.forEach(ul => console.log(ul.children));
const ulsAsArray = Array.from(uls);

const firstLis = ulsAsArray.map(ul => ul.children[0]);
const firstLis2 = ulsAsArray.map(ul => ul.querySelector("li"));

console.log(JSON.stringify(firstLis) === JSON.stringify(firstLis2)); // true!
