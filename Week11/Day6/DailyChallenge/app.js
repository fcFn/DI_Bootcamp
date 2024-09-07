const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  // Mock user authentication
  req.headers['user-id'] = 2; // Assume user with ID 1 is logged in
  next();
});

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
