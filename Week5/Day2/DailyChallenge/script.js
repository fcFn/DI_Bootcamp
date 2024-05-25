// nstructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const hasArticle = string => ["a", "an", "the"].includes(string.split(" ")[0]);

// Tagged template that adds "a" or "an" before a word
const a = (_, word) => {
  // If the word already starts with an article
  // or if the word is a proper noun,
  // don't add an article.
  if (hasArticle(word) || word[0] === word[0].toUpperCase()) {
    return word;
  }
  // If the word starts with a vowel or "h" and is not capitalized
  const article = "aeiouh".includes(word[0]) ? "an" : "a";
  return `${article} ${word}`;
};

const noArticle = (_, word) => {
  if (hasArticle(word)) {
    return word.split(" ").slice(1).join(" ");
  }
  return word;
};

const form = document.getElementById("libform");

// Memoized (premature optimization? idk, it's fun)
const createStories = () => {
  const cache = {};
  return (noun, adjective, person, verb, place) => {
    const key = `${noun}-${adjective}-${person}-${verb}-${place}`;
    if (cache[key]) {
      return cache[key];
    }
    const stories = [
      `Once upon a time, there was ${a`${adjective}`} ${noArticle`${noun}`} named ${person}. ${person} loved to ${verb} in ${a`${place}`}.`,
      `In ${a`${place}`}, ${person} found ${a`${adjective}`} ${noArticle`${noun}`}. ${person} decided to ${verb} it.`,
      `There was ${a`${adjective}`} ${noArticle`${noun}`} in ${a`${place}`}. ${person} wanted to ${verb} it, so ${person} did.`,
    ];
    cache[key] = stories;
    return stories;
  };
};

function getValues() {
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;
  return [noun, adjective, person, verb, place];
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const values = getValues();
  document.getElementById("story").textContent = createStories()(...values)[0];
});

let previousStoryIndex = 0;
document.getElementById("shuffle-button").addEventListener("click", () => {
  const values = getValues();
  const stories = createStories()(...values);
  let newStoryIndex = Math.floor(Math.random() * stories.length);
  // avoid showing the same story twice in a row
  if (newStoryIndex === previousStoryIndex) {
    newStoryIndex = (previousStoryIndex + 1) % stories.length;
  }
  previousStoryIndex = newStoryIndex;
  const story = stories[newStoryIndex];
  document.getElementById("story").textContent = story;
});
