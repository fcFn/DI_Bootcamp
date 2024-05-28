// Hangman game
// First prompt player 1 for a word that has a minimum of 8 characters.
// If the word is less than 8 characters, keep prompting until it is 8 characters.
// Then prompt player 2 to guess the word.
// Player 2 has 10 chances to guess the word.
// If player 2 guesses a letter that is in the word, the word displays with the correct letter.
// If player 2 guesses a letter that is not in the word, player 2 loses a chance.
// If player 2 guesses a letter that they have already guessed, display a message to let them know.
// If player 2 guesses the word correctly, display a congratulatory message.
// If player 2 runs out of chances, display a message showing the correct word.

// Prompt player 1 for a word that has a minimum of 8 characters
let word = "";
while (word.length < 8) {
  word = prompt("Enter a word with at least 8 characters: ")
}

// Prompt player 2 to guess the word
let guessedWord = ""
let chances = 10;
let guessedLetters = [];
let correctLetters = [];
let wordArray = word.toLowerCase().split("");
let correct = false;

while (chances > 0 && !correct) {
  guessedWord = prompt(`Guess the word: ${wordArray.map(letter => correctLetters.includes(letter) ? letter : "*").join(" ")}`);
  if (guessedWord.toLowerCase() === word) {
    correct = true;
  } else if (guessedWord.toLowerCase().length === 1) {
    if (guessedLetters.includes(guessedWord)) {
      alert("You've already guessed that letter");
    } else if (wordArray.includes(guessedWord.toLowerCase())) {
      correctLetters.push(guessedWord);
    } else {
      chances--;
    }
    guessedLetters.push(guessedWord);
  }
}

if (correct) {
  alert("Congratulations! You guessed the word.");
}
else {
  alert(`You ran out of chances. The word was ${word}`);
}


