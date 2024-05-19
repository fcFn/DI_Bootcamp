/*🌟 Exercise 2 : Users And Style
Instructions
<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>


Add the code above, to your HTML file

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).*/
const div = document.querySelector("div");

div.style.backgroundColor = "lightblue";

for (const li of document.querySelectorAll("li")) {
  if (li.innerHTML === "John") {
    li.style.display = "none";
  } else if (li.innerHTML === "Pete") {
    li.style.border = "1px solid black";
  }
}

document.body.style.fontSize = "20px";

if (div.style.backgroundColor === "lightblue") {
  const li = document.querySelectorAll("li");
  alert(`Hello ${li[0].innerHTML} and ${li[1].innerHTML}`)
}
