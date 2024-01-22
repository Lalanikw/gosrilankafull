"use client"

import Hero from '../../components/Hero'
import React from 'react'
import { useEffect, useState } from 'react'
import PlaceList from '../../components/PlaceList'
import GoogleMapView from '../../components/GoogleMapView'
import { PlaceListContext } from '../../context/PlaceListContext'
import Attractions from '../../components/Attractions'

function page() {

  const [placeList, setPlaceList] = useState();

  useEffect(() => {
    getPlaceList('attractions in Sri Lanka');
  }, [])

  const getPlaceList = async (value) => {
    const results = await fetch("/api/google-place-api?q="+value)
    const data = await results.json();

    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  }

  return (
    <div>
        <PlaceListContext.Provider value={{placeList,setPlaceList}}>
         
        <div className='mt-1 pt-1 grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1'>

                  <div className='mt-3 pt-3 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
                        <GoogleMapView />
                  
            <div className='mt-1 pt-1' >
               <Hero userInput={(value)=>getPlaceList(value)} />
                        {placeList ? <PlaceList placeList={placeList.slice(0, 3)} /> : null}
                        </div>
                      
                  </div>
          
                <div className='lg:mt-[1px] md:mt-[2px]'>
                          <Attractions />
                </div>
                  
        </div>
        </PlaceListContext.Provider>
    </div>
  )
}

export default page

