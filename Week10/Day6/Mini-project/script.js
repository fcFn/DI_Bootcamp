// Instructions:
// 1. Create your HTML file, and add the relevant elements.
// 2. In your JS file, create your functions :
//    * to retrieve the elements from the DOM.
//    * to get the data from the API (star wars characters).
//    * to display the info on the DOM: the name, height, gender, birth year, and home world of the character.
// 3. Display the data using AJAX. Make sure to display a loading message.
// 4. If there is an error getting the data, display a message.
// 5. You can use your own css to style the website as you see fit

// Retrieve elements from the DOM
const getCharacterBtn = document.getElementById("getCharacter");
const characterInfo = document.getElementById("characterInfo");

// Function to get random character data from the API
async function getRandomCharacter() {
  const totalCharacters = 83;
  const randomId = Math.floor(Math.random() * totalCharacters) + 1;
  const url = `https://www.swapi.tech/api/people/${randomId}`;

  try {
    characterInfo.innerHTML =
      '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</p>';
    const response = await fetch(url);
    const data = await response.json();
    const character = data.result.properties;

    // Get homeworld name
    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;

    displayCharacterInfo(character, homeworldName);
  } catch (error) {
    console.error("Error:", error);
    characterInfo.innerHTML =
      '<p class="error">Oops! There was an error getting the data.</p>';
  }
}

// Function to display character info on the DOM
function displayCharacterInfo(character, homeworld) {
  characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Homeworld:</strong> ${homeworld}</p>
    `;
}

// Event listener for the button
getCharacterBtn.addEventListener("click", getRandomCharacter);
