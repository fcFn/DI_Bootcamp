const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved and sent as a response');
    res.json(posts);
  } catch (error) {
    res.status(500).send('Error retrieving posts');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
