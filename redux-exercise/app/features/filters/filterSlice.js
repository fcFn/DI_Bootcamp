import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedAuthor: null,
  },
  reducers: {
    setSelectedAuthor: (state, action) => {
      state.selectedAuthor = action.payload;
    },
  },
});

export const { setSelectedAuthor } = filterSlice.actions;
export default filterSlice.reducer;
