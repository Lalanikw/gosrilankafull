import React, { useState } from 'react';
import Image from 'next/image';

function Hero({ onSearch}) {

  const [searchInput, setSearchInput] = useState();
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchInput);
    }
  }; 

  return (
    <div className='text-center'>
          <div className='' >

                <div className='mt-[10px]'>
                  <h2 className='text-[30px] text-black-700 tracking-widest font-semibold'>
                      Explore</h2>
                  <h2 className='text-[18px]'> The perl of the Indian Ocean</h2>
                  <div className='mt-2 flex gap-2 items-center justify-center '>
                        <input type='text'
                          onChange={(e)=>setSearchInput(e.target.value)}
                          placeholder='Sri Lanka at your finger tip'
                                      className='z-20 bg-white p-2 border-[1px] rounded-full px-5
                                      w-[36%] shadow-sm'/>
                        <button
                          onClick={handleSearch}
                          className='bg-red-600 rounded-full p-2 shadow-md z-10 cursor-pointer
                                  hover:scale-105 transition-all'>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                          <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                      </svg>
                        </button>
                    </div>

                </div>
          </div>
    </div>
  )
}

export default Hero
