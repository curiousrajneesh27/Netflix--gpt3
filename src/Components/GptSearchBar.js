import React, { useRef } from 'react'
import lang from '../Utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../Utils/openai';

const GptSearchBar = () => {

  const langkey = useSelector(store => store.config.lang)
  const searchText = useRef(null);
  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    //make and API call to GPT API and get movies Results

    const gptQuery = "Act As a Movie Recommendation System and suggest some movies for the Query "
     + searchText.current.value + 
     ". only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
      });

      console.log(gptResults.choices);
    }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' 
      onSubmit={(e) => e.preventDefault()}
      >
        <input 
        ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;