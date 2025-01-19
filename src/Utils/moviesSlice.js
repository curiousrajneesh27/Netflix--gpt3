import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const movieSlice = createSlice({
  name: "movies", // Changed from "counter" to "movies" for clarity
  initialState: {
    nowPlayingMovies: null, // Changed to lowercase
    trailerVideos: null,     // Added trailerVideos to manage trailer data
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // Update nowPlayingMovies
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload; // Update nowPlayingMovies
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;
