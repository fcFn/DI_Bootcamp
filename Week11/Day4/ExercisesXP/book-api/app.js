const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

app.post('/api/books', checkContentType, (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

function checkContentType(req, res, next) {
    if (req.method !== 'POST' && req.method !== 'PATCH') {
        return next()
    }
    if (!req.headers['content-type']?.includes('application/json')) {
        return res.status(400).send('Content-Type must be application/json')
    }
    next()
}

