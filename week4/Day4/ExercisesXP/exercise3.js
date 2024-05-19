/* 🌟 Exercise 3 : Change The Navbar
Instructions
<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>


Add the code above, to your HTML file

Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property). */
const div = document.querySelector("div");

div.setAttribute("id", "socialNetworkNavigation");

const li = document.createElement("li");
li.appendChild(document.createTextNode("Logout"));
div.children[0].appendChild(li);

console.log(div.firstElementChild.firstElementChild.textContent);
console.log(div.firstElementChild.lastElementChild.textContent);
