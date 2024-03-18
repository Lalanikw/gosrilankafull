import React from 'react'

function Landing() {
  return (
    <div
     className='relative h-screen opacity-90'>
      <video src={require('../public/beach2.mp4')}
        autoPlay muted loop className='object-cover w-full h-full lg:mt-[1px] md:mt-[2px] sm:mt-[1px]' />
      <div className="absolute inset-0 bg-blue-100 opacity-10"></div>

    </div>
  )
}

export default Landing

