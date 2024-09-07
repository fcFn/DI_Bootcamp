import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const reactionSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      if (!state[postId]) {
        state[postId] = { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 };
      }
      state[postId][reaction]++;
    },
  },
});

export const { addReaction } = reactionSlice.actions;
export default reactionSlice.reducer;
