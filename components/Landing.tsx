import React from 'react'

function Landing() {
  return (
    <div
     className='relative h-screen opacity-90'>
      <video src={require('../public/beach2.mp4')}
        autoPlay muted loop className='object-cover w-full h-full lg:mt-[1px] md:mt-[2px] sm:mt-[1px]' />
      <div className="absolute inset-0 bg-blue-100 opacity-10"></div>

        {/* <div className='absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
              <h1 className='text-3xl md:text-7xl text-black font-semibold hover:text-blue-900'>Sri Lanka </h1>
              <h2 className='text-2xl md:text-lg  text-blue-900'>The Perl of the Indian Ocean</h2>
        </div> */}

    </div>
  )
}

export default Landing

