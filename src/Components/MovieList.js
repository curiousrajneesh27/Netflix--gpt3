import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Check if movies is null or undefined, and default to an empty array if necessary
  const movieList = movies || [];

  return (
    <div className="px-6">
      {/* Title Section */}
      <h1 className=" text-lg md:text-3xl py-4 text-white hide-scrollba">{title}</h1>
      
      {/* Movie List Section with Scrollbar Hidden */}
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList.length > 0 ? (
            movieList.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))
          ) : (
            <div className="text-white">No movies available</div> // Fallback message
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;