// Instructions:
// 1. Use this Giphy API Random documentation. Use this API Key : `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// 3. In the JS file, create a program to fetch **one** random gif depending on the search of the user (ie. If the search is "sun", append on the page one gif with a category of "sun").
// 4. The gif should be appended with a **DELETE** button next to it. **Hint** : to find the URL of the gif, look for the sub-object named "images" inside the data you receive from the API.
// 5. Allow the user to delete a specific gif by clicking the **DELETE** button.
// 6. Allow the user to remove all of the GIFs by clicking a **DELETE ALL** button.

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    await fetchAndAppendGif(searchTerm);
    searchInput.value = "";
  }
});

async function fetchAndAppendGif(searchTerm) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`
    );
    const data = await response.json();
    const gifUrl = data.data.images.original.url;
    appendGif(gifUrl);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

function appendGif(gifUrl) {
  const gifWrapper = document.createElement("div");
  gifWrapper.classList.add("gif-wrapper");

  const gifImage = document.createElement("img");
  gifImage.src = gifUrl;
  gifImage.alt = "Random GIF";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";
  deleteButton.addEventListener("click", () => {
    gifContainer.removeChild(gifWrapper);
  });

  gifWrapper.appendChild(gifImage);
  gifWrapper.appendChild(deleteButton);
  gifContainer.appendChild(gifWrapper);
}

deleteAllButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
