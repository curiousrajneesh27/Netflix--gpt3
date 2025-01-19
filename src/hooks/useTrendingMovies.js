import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice"; // Import action
import { API_OPTIONS } from "../Utils/constant"; // Assuming API_OPTIONS are set

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  // Fetch Trending Movies
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );
    const json = await data.json();

    console.log("Fetched Trending Movies:", json.results);
    dispatch(addNowPlayingMovies(json.results)); // Dispatch Trending Movies
  };

  useEffect(() => {
    getTrendingMovies(); // Call this to get Trending Movies on load
  }, []);

  return {}; // Return an empty object since there's no additional functionality
};

export default useTrendingMovies;
