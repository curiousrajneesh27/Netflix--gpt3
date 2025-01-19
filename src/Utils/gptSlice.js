import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // Toggle the value of showGptSearch
    },
  },
});

// Exporting actions to dispatch
export const { toggleGptSearchView } = gptSlice.actions;  // Export only the required action

// Exporting the reducer to be used in the store
export default gptSlice.reducer;