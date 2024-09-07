import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import reactionsReducer from './features/reactions/reactionSlice';
import filterReducer from './features/filters/filterSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    reactions: reactionsReducer,
    filter: filterReducer,
  },
});
