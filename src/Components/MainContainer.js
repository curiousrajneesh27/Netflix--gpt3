import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies); // Safely access the movies

  // Check if movies are available
  if (!movies || movies.length === 0)
    return  // Show a loading message if no movies are available

  // Get the first movie's details
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie; // Destructure title, overview, and id

  return (
    <div>
      {/* Ensure title and overview are passed to VideoTitle */}
      <VideoTitle title={original_title} overview={overview} />

      {/* Pass the correct movieId to VideoBackground */}
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;