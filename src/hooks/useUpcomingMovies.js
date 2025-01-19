import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice"; // Import action
import { API_OPTIONS } from "../Utils/constant"; // Assuming API_OPTIONS are set

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // Fetch Upcoming Movies
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    console.log("Fetched Upcoming Movies:", json.results);
    dispatch(addNowPlayingMovies(json.results)); // Dispatch Upcoming Movies
  };

  useEffect(() => {
    getUpcomingMovies(); // Call this to get Upcoming Movies on load
  }, []);

  return {}; // Return an empty object since there's no additional functionality
};

export default useUpcomingMovies;
