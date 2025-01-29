import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant';

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-48 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
      <img 
        alt="Movie Poster"
        src={IMG_CDN_URL + posterpath}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default MovieCard;