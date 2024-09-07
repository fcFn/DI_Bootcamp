import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setSelectedAuthor } from './filterSlice';

const AuthorFilter = () => {
  const dispatch = useDispatch();
  const [authors, setAuthors] = React.useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setAuthors(response.data);
    });
  }, []);

  const handleAuthorChange = (e) => {
    dispatch(setSelectedAuthor(Number(e.target.value)));
  };

  return (
    <select onChange={handleAuthorChange}>
      <option value="">All Authors</option>
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};

export default AuthorFilter;
