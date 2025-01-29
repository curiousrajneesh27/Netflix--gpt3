import React from "react";

const GptMovieSuggestion = ({ movies, loading }) => {
  return (
    <div className="container mx-auto px-4 mt-10">
      {loading ? (
        <p className="text-center text-lg text-gray-300 animate-pulse">
          Loading suggestions...
        </p>
      ) : movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ height: "400px" }} // Fix card height
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-1/3">
                <h3 className="text-md font-bold truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-3 mt-2">
                  {movie.overview || "No description available."}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-yellow-400 text-sm font-semibold">
                    ⭐ {movie.vote_average || "N/A"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {movie.release_date || "Unknown"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300 text-lg">
          No suggestions available. Try searching again.
        </p>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
