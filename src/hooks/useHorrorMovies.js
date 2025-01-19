import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice"; // Import action
import { API_OPTIONS } from "../Utils/constant"; // Assuming API_OPTIONS are set

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  // Fetch Horror Movies
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    console.log("Fetched Horror Movies:", json.results);
    dispatch(addNowPlayingMovies(json.results)); // Dispatch Horror Movies
  };

  useEffect(() => {
    getHorrorMovies(); // Call this to get Horror Movies on load
  }, []);

  return {}; // Return an empty object since there's no additional functionality
};

export default useHorrorMovies;
