import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; 
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"


// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer
  },
});


export default store;