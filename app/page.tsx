"use client"

import Landing from '../components/Landing'
import LandingBottom from '../components/LandingBottom';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <div className=''>
        <div className='text-left'>
            <Landing />
            <div>
                <div className="text-center mb-15 mt-6">
                    <h5 className="text-base md:text-lg text-indigo-700 mb-3">Ayubowan | Vanakkam | Assalamu Alaikum </h5>
                    <h1 className="text-3xl md:text-5xl text-gray-700 font-semibold">Welcome to Sri Lanka</h1>
                </div>
                <div className=' flex flex-col lg:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify'>
                      <Image src='/Map_time.jpg' alt='map' width={850} height={200}
                              className='information-image w-2/3 h-2/3 pt-10 p-3' />
                      <div className='information p-5 lg:w-1/3'>
                          <p className='pb-5'  >
                      <strong className='text-blue-900 text-2xl'>T</strong>raveling to Sri Lanka is an exciting adventure. The country welcomes visitors
                      with lush landscapes, a rich history, and vibrant culture. 
                      <br></br> <br></br>From the historic city of Colombo
                      to cultural treasures like Sigiriya and Kandy, and the scenic beauty of Ella and Nuwara Eliya,
                      each destination offers a unique experience. Coastal gems like Mirissa and Trincomalee provide
                      sun and sand, while Yala National Park and Horton Plains beckon nature enthusiasts.
                      <br></br><br></br>Exploring local cuisine,
                      engaging with communities, and participating in cultural festivals make the journey an immersive and
                      enriching experience in Sri Lanka. <br /><br></br>

                      For more information, please contact us.  
                          </p>
                          <Link href="/ContactUs"><button className='p-2 bg-blue-900 rounded-full text-white'>Contact Us &#x27A4;</button></Link>
                      </div>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <h5 className="text-base md:text-lg text-indigo-700 mb-3 mt-5"> Calendar Holidays | Events | Rent | Tickets | VISA | Driver License </h5>
            <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold">Getting Around in Sri Lanka</h1>
            <div className='flex'>
              <LandingBottom/>
            </div>
        </div>
    </div>
  )
}
