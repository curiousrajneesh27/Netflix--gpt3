import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux'; // For Redux state
import lang from '../Utils/languageConstants'; // Language constants
import { API_OPTIONS, GEMINI_KEY } from '../Utils/constant'; // API constants

const { GoogleGenerativeAI } = require('@google/generative-ai'); // Import Google Generative AI
const genAI = new GoogleGenerativeAI(GEMINI_KEY); // Initialize with API key
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Select AI model

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang); // Get language key from Redux
  const searchText = useRef(null); // Reference for search input
  const [movieResults, setMovieResults] = useState([]); // State to store movie results

  // Function to fetch movie details from TMDB API
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json.results || [];
    } catch (error) {
      console.error('Error fetching movie details from TMDB:', error);
      return [];
    }
  };

  // Handle GPT search button click
  const handleGptSearchClick = async () => {
    const gptQuery =
      'Act as a Movie Recommendation System and suggest some movies for the Query ' +
      searchText.current.value +
      '. Only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi Mil Gaya';

    try {
      const result = await model.generateContent(gptQuery); // Fetch data from GPT
      const responseText = result.response.text(); // Extract text response

      // Split response into individual movie names
      const movieList = responseText.split(',').map((movie) => movie.trim());

      // Fetch additional details from TMDB for each movie
      const movieDataPromises = movieList.map((movie) => searchMovieTMDB(movie));
      const movieData = await Promise.all(movieDataPromises);

      // Flatten and set all movie results in state
      const allMovies = movieData.flat();
      setMovieResults(allMovies);
    } catch (error) {
      console.error('Error fetching data from GPT or TMDB:', error);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10">
      {/* Search bar */}
      <form
        className="w-full max-w-3xl bg-black grid grid-cols-12 mt-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-white bg-gray-700 rounded-lg"
          placeholder={lang[langkey]?.gptSearchPlaceholder || 'Search for a movie...'}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey]?.search || 'Search'}
        </button>
      </form>

      {/* Movie results */}
      <div className="mt-6 w-full px-4 z-10 relative max-h-[calc(100vh-200px)] overflow-y-auto">
  <div className="flex flex-wrap justify-center space-x-4">
    {movieResults.map((movie) => (
      <div key={movie.id} className="bg-gray-800 text-white p-2 rounded-lg w-48 mb-4 shadow-lg transform hover:scale-105 transition-all duration-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover rounded-lg mb-2"
        />
        <h3 className="text-center text-xl font-semibold mb-2 hover:text-red-500">{movie.title}</h3>
        {/* Removed rating */}
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default GptSearchBar;