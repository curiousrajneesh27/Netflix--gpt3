import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from '../Utils/constant';

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img
          src={BG_URL}
          alt='background'
        />
      </div>
      <GptMovieSuggestion/>
      <GptSearchBar/>
    </div>
  )
}

export default GPTSearch;
