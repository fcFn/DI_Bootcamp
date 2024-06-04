// For your convenience, dear checker ^_^
const fileName = document.location.href.split("/").slice(-1)[0];
if (fileName === "exercise1.html") {
  // 🌟 Exercise 1: Timer
  // Instructions
  // Using this HTML code:

  // <!DOCTYPE html>
  //     <html>
  //     <head>
  //         <style>
  //         p {
  //           background: yellow;
  //           color: red;
  //         }
  //         </style>
  //     </head>
  //     <body>
  //         <div id="container"></div>
  //         <button id="clear">Clear Interval</button>
  //     </body>
  //     </html>

  // Part I
  // In your Javascript file, using setTimeout, call a function after 2 seconds.
  // The function will alert “Hello World”.

  // Part II
  // In your Javascript file, using setTimeout, call a function after 2 seconds.
  // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

  // Part III
  // In your Javascript file, using setInterval, call a function every 2 seconds.
  // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
  // The interval will be cleared (ie. clearInterval), when the user will click on the button.
  // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
  setTimeout(() => {
    alert("Hello World");
  }, 2000);

  setTimeout(() => {
    let newP = document.createElement("p");
    newP.innerHTML = "Hello World";
    document.getElementById("container").appendChild(newP);
  }, 2000);

  let interval = setInterval(() => {
    let newP = document.createElement("p");
    newP.innerHTML = "Hello World";
    document.getElementById("container").appendChild(newP);
    if (document.getElementById("container").childElementCount === 5) {
      clearInterval(interval);
    }
  }, 2000);

  document.getElementById("clear").addEventListener("click", () => {
    clearInterval(interval);
  });
} else if (fileName === "exercise2.html") {
  //   🌟 Exercise 2 : Move The Box
  // Instructions
  // <!DOCTYPE html>
  //     <html>
  //     <head>
  //         <style>
  //         #container {
  //           width: 400px;
  //           height: 400px;
  //           position: relative;
  //           background: yellow;
  //         }
  //         #animate {
  //           width: 50px;
  //           height: 50px;
  //           position: absolute;
  //           background-color: red;
  //         }
  //         </style>
  //     </head>
  //     <body>
  //         <p><button onclick="myMove()">Click Me</button></p>
  //         <div id="container">
  //           <div id="animate"></div>
  //         </div>
  //     </body>
  //     </html>

  // Copy the code above, to a structured HTML file.
  // In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
  // The <div id="animate"> should move 1px to the right every millisecond, until it reaches the end of the <div id="container">.
  // Hint : use clearInterval as soon as the box reaches the right end side of the container
  // Hint : check out the demonstration in the Course Noted named JS Functions

  let box = document.getElementById("animate");
  let container = document.getElementById("container");
  let interval2;
  function myMove() {
    let pos = 0;
    interval2 = setInterval(() => {
      if (pos === container.offsetWidth - box.offsetWidth) {
        clearInterval(interval2);
      } else {
        pos++;
        box.style.left = pos + "px";
      }
    }, 1);
  }

  document.querySelector("button").addEventListener("click", myMove);
} else if (fileName === "exercise3.html") {
  // 🌟 Exercise 3: Drag & Drop
  // Instructions
  // <!DOCTYPE html>
  //     <html>
  //     <head>
  //         <style>
  //         #target {
  //           width: 200px;
  //           height: 200px;
  //           position: relative;
  //           background: yellow;
  //         }
  //         #box {
  //           width: 50px;
  //           height: 50px;
  //           position: absolute;
  //           background-color: red;
  //         }
  //         </style>
  //     </head>
  //     <body>
  //         <div id="target"></div>
  //         <br>
  //         <div id="box"></div>
  //     </body>
  //     </html>

  // Copy the code above, to a structured HTML file.
  // In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

  let box = document.getElementById("box");
  let target = document.getElementById("target");
  target.style.position = "relative";
  let body = document.body;

  box.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });

  target.addEventListener("dragenter", (e) => {
  e.stopPropagation();
  e.preventDefault();
  // Check if the event target is the drop target
  if (e.target === target) {
    e.target.style.backgroundColor = "green";
  }
});

  target.addEventListener("dragleave", (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target);
     if (e.target === target) {
    e.target.style.backgroundColor = "yellow";
  }
  });

  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.target.style.backgroundColor = "yellow";
    const box = document.getElementById(e.dataTransfer.getData("text"));
    box.style.left = 0;
    box.style.top = 0;
    e.target.appendChild(box);
  });

  body.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  body.addEventListener("drop", (e) => {
    e.preventDefault();
    const box = document.getElementById(e.dataTransfer.getData("text"));
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
    body.appendChild(box);
  });
}
