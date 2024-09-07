const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.json());
app.use(express.static('public'));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
];

let scores = {};

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];
  const options = [correctEmoji];

  while (options.length < 3) {
    const option = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(option)) {
      options.push(option);
    }
  }

  return {
    emoji: correctEmoji.emoji,
    options: options.sort(() => Math.random() - 0.5).map(opt => opt.name),
    correct: correctEmoji.name
  };
}

app.get('/emoji', (req, res) => {
  res.json(getRandomEmoji());
});

app.post('/guess', (req, res) => {
  const { player, guess, correct } = req.body;
  if (!scores[player]) {
    scores[player] = 0;
  }
  if (guess === correct) {
    scores[player]++;
    res.json({ correct: true, score: scores[player] });
  } else {
    res.json({ correct: false, score: scores[player] });
  }
});

app.get('/leaderboard', (req, res) => {
  const leaderboard = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  res.json(leaderboard);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
