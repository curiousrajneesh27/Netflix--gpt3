import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTrailerVideos } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
      
      //fetch trailer video and updating the store with trailer video data
    
      const getMovieVideos = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const json = await response.json();
    
          const filterData = json.results.filter((video) => video.type === "Trailer");
          const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    
          if (trailer) {
            dispatch(addTrailerVideos(trailer));
          }
        } catch (error) {
          console.error("Error fetching movie videos:", error);
        }
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
    
}
export default useMovieTrailer;