import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice"; // Import action
import { API_OPTIONS } from "../Utils/constant"; // Assuming API_OPTIONS are set

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // Fetch Now Playing Movies
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    console.log("Fetched Movies:", json.results);
    dispatch(addPopularMovies(json.results)); // Dispatch Now Playing Movies
  };

  useEffect(() => {
    getPopularMovies(); // Call this to get Now Playing Movies on load
  }, []);

  return {}; // Return an empty object since there's no additional functionality
};

export default usePopularMovies;
