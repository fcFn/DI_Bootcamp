// Instructions:
// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// 3. The output should be displayed below the form.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    const data = {
      name: name,
      lastName: lastName,
    };

    const jsonString = JSON.stringify(data, null, 2);

    output.innerHTML = "<pre>" + jsonString + "</pre>";
  });
});
