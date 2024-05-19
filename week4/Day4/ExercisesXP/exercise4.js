/* Exercise 4 : My Book List
Instructions
Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red. */

const div = document.querySelector(".listBooks");
const allBooks = [
  {
    title: "The Dawn of Everything",
    author: "David Graeber and David Wengrow",
    image:
      "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780374157357.jpg",
    alreadyRead: true,
  },
  {
    title: "Debt: The First 5,000 Years",
    author: "David Graeber",
    image: "https://files.libcom.org/files/images/library/graeber-book.jpg",
    alreadyRead: false,
  },
];

const table = document.createElement("table");
div.appendChild(table);

for (const book of allBooks) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  const td1 = document.createElement("td");
  td1.textContent = `${book.title} written by ${book.author}`;
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  const img = document.createElement("img");
  img.src = book.image;
  img.width = 100;
  td2.appendChild(img);
  tr.appendChild(td2);

  if (book.alreadyRead) {
    tr.style.color = "red";
  }
  [td1, td2].forEach(td => {
    td.style.border = "1px solid lightgray";
    td.style.backgroundColor = "white";
  });
}
table.style.border = "1px solid lightgray";
table.style.backgroundColor = "lightgray";
