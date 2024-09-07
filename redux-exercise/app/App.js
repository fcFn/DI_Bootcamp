import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PostsList from './features/posts/PostsList';
import AuthorFilter from './features/filters/AuthorFilter';

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <AuthorFilter />
      <PostsList />
    </div>
  );
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root

