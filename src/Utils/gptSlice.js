import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    gptMovies: null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // Toggle the value of showGptSearch
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies = action.payload
    }
  },
});

// Exporting actions to dispatch
export const { toggleGptSearchView, addGptMovieResult} = gptSlice.actions;  // Export only the required action

// Exporting the reducer to be used in the store
export default gptSlice.reducer;