const body = document.children[0].children[1];

// VS Code Live Preview injects a script as the first child of the body, 
const scriptInjected = body.children[0].tagName === "SCRIPT";
const itemNumber = scriptInjected ? 1 : 0;

const div = body.children.item(itemNumber);
const div2 = scriptInjected ? body.firstElementChild.nextElementSibling : body.firstElementChild;

console.log(div === div2); // true!

const ul = div.nextElementSibling;
const ul2 = ul.parentElement.children[scriptInjected ? 2 : 1];

console.log(ul === ul2); // true!

const secondLi = ul.children[1];
const secondLi2 = ul.lastElementChild;

console.log(secondLi === secondLi2); // true!
