// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const radius = document.querySelector("#radius").value;
  const volume = (4 / 3) * Math.PI * radius ** 3;
  document.querySelector("#volume").value = volume.toFixed(2);
});
