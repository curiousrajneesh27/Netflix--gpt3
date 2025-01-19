import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice"; // Import action
import { API_OPTIONS } from "../Utils/constant"; // Assuming API_OPTIONS are set

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Fetch Now Playing Movies
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    console.log("Fetched Movies:", json.results);
    dispatch(addNowPlayingMovies(json.results)); // Dispatch Now Playing Movies
  };

  useEffect(() => {
    getNowPlayingMovies(); // Call this to get Now Playing Movies on load
  }, []);

  return {}; // Return an empty object since there's no additional functionality
};

export default useNowPlayingMovies;
