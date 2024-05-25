// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
const lastP = article.lastElementChild;
lastP.remove();

const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

const button = document.createElement("button");
button.textContent = "Boldify";
document.body.appendChild(button);
button.addEventListener("click", () => {
  const ps = document.querySelectorAll("p");
  for (const p of ps) {
    p.style.fontWeight = "bold";
  }
});

h1.addEventListener("mouseover", () => {
  h1.style.fontSize = `${Math.random() * 100}px`;
});

const secondP = document.querySelectorAll("p")[1];
secondP.addEventListener("mouseover", () => {
  secondP.style.transition = "opacity 1s";
  secondP.style.opacity = 0;
});
