var colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];
var isMouseDown = false;
var selectedColor = "black";

// Create color options
var colorsDiv = document.getElementById("colors");
colors.forEach(function (color) {
  var colorLabel = document.createElement("label");
  var colorDiv = document.createElement("div");
  var checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.id = color;
  checkbox.name = color;

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      selectedColor = color;
      var otherCheckboxes = document.querySelectorAll(
        '#colors input[type="checkbox"]'
      );
      otherCheckboxes.forEach(function (otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });

  colorDiv.style.backgroundColor = color;
  if (color === "black") {
    checkbox.checked = true;
  }
  colorDiv.classList.add("color-box");

  colorLabel.appendChild(checkbox);
  colorLabel.appendChild(colorDiv);
  colorsDiv.appendChild(colorLabel);
});

// Create grid cells
var gridDiv = document.getElementById("grid");
for (var i = 0; i < 60 * 24; i++) {
  var cellDiv = document.createElement("div");
  cellDiv.addEventListener("mousedown", function (event) {
    event.preventDefault();
    isMouseDown = true;
    this.style.backgroundColor = selectedColor;
  });
  cellDiv.addEventListener("mousemove", function () {
    if (isMouseDown) {
      this.style.backgroundColor = selectedColor;
    }
  });
  cellDiv.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
  gridDiv.appendChild(cellDiv);
}

// Add clear functionality
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  var cells = document.querySelectorAll("#grid div");
  cells.forEach(function (cell) {
    cell.style.backgroundColor = "white";
  });
});
