let quotes = [
  {
    id: 0,
    author: "Charles Lindbergh",
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
    likes: 0,
  },
  {
    id: 1,
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
    likes: 0,
  },
  {
    id: 2,
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    likes: 0,
  },
];

let currentQuote = null;
let filteredQuotes = [];
let currentFilteredIndex = 0;

const generateQuoteBtn = document.getElementById("generate-quote");
const quoteDisplay = document.getElementById("quote-display");
const quoteActions = document.getElementById("quote-actions");
const addQuoteForm = document.getElementById("add-quote-form");
const filterForm = document.getElementById("filter-form");
const filteredQuoteNavigation = document.getElementById(
  "filtered-quote-navigation"
);

generateQuoteBtn.addEventListener("click", displayRandomQuote);
addQuoteForm.addEventListener("submit", addNewQuote);
filterForm.addEventListener("submit", filterQuotes);

document
  .getElementById("char-count-with-spaces")
  .addEventListener("click", () => showCharCount(true));
document
  .getElementById("char-count-without-spaces")
  .addEventListener("click", () => showCharCount(false));
document.getElementById("word-count").addEventListener("click", showWordCount);
document.getElementById("like-quote").addEventListener("click", likeQuote);
document
  .getElementById("prev-quote")
  .addEventListener("click", () => navigateFilteredQuotes(-1));
document
  .getElementById("next-quote")
  .addEventListener("click", () => navigateFilteredQuotes(1));

function displayRandomQuote() {
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === currentQuote && quotes.length > 1);

  currentQuote = newQuote;
  quoteDisplay.innerHTML = `
      <blockquote>"${currentQuote.quote}"</blockquote>
      <p>- ${currentQuote.author}</p>
  `;
  quoteActions.style.display = "block";
}

function addNewQuote(e) {
  e.preventDefault();
  const newQuote = document.getElementById("new-quote").value;
  const newAuthor = document.getElementById("new-author").value;
  const newId = quotes.length;
  quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
  addQuoteForm.reset();
  alert("New quote added successfully!");
}

function showCharCount(includeSpaces) {
  if (currentQuote) {
    const count = includeSpaces
      ? currentQuote.quote.length
      : currentQuote.quote.replace(/\s/g, "").length;
    alert(
      `Character count ${includeSpaces ? "(with" : "(without"} spaces): ${count}`
    );
  }
}

function showWordCount() {
  if (currentQuote) {
    const count = currentQuote.quote
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    alert(`Word count: ${count}`);
  }
}

function likeQuote() {
  if (currentQuote) {
    currentQuote.likes++;
    alert(`You liked this quote! It now has ${currentQuote.likes} like(s).`);
  }
}

function filterQuotes(e) {
  e.preventDefault();
  const authorFilter = document
    .getElementById("author-filter")
    .value.toLowerCase()
    .trim();
  if (authorFilter === "") {
    filteredQuotes = [];
    quoteDisplay.innerHTML =
      "<p>Please enter an author name to filter quotes.</p>";
    filteredQuoteNavigation.style.display = "none";
    return;
  }

  filteredQuotes = quotes.filter((quote) =>
    quote.author.toLowerCase().includes(authorFilter)
  );
  currentFilteredIndex = 0;
  if (filteredQuotes.length > 0) {
    displayFilteredQuote();
    filteredQuoteNavigation.style.display =
      filteredQuotes.length > 1 ? "block" : "none";
  } else {
    quoteDisplay.innerHTML = "<p>No quotes found for this author.</p>";
    filteredQuoteNavigation.style.display = "none";
  }
}

function displayFilteredQuote() {
  const quote = filteredQuotes[currentFilteredIndex];
  quoteDisplay.innerHTML = `
      <blockquote>"${quote.quote}"</blockquote>
      <p>- ${quote.author}</p>
  `;
  currentQuote = quote;
}

function navigateFilteredQuotes(direction) {
  currentFilteredIndex += direction;
  if (currentFilteredIndex < 0)
    currentFilteredIndex = filteredQuotes.length - 1;
  if (currentFilteredIndex >= filteredQuotes.length) currentFilteredIndex = 0;
  displayFilteredQuote();
}

document.getElementById("author-filter").addEventListener("input", function () {
  if (this.value.trim() === "") {
    filteredQuoteNavigation.style.display = "none";
    quoteDisplay.innerHTML =
      "<p>Please enter an author name to filter quotes.</p>";
  }
});

// Initial quote display
displayRandomQuote();
