"use client"

import Hero from '../../components/Hero'
import React from 'react'
import { useEffect, useState } from 'react'
import PlaceList from '../../components/PlaceList'
import GoogleMapView from '../../components/GoogleMapView'
import { PlaceListContext } from '../../context/PlaceListContext'
import Attractions from '../../components/Attractions'

function page() {

  const [placeList, setPlaceList] = useState([]);

  const handleSearch = async (value) => {
    const results = await fetch("/api/google-place-api?q=" + value);
    const data = await results.json();
    setPlaceList(data.resp.results);
  };

  return (
    <div>
        <PlaceListContext.Provider value={{placeList,setPlaceList}}>
                <div className='mt-1 pt-1 grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1'>
                    <div className='mt-2 pt-2 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
                          <GoogleMapView place={placeList} />
                            <div className='mt-1 pt-1' >
                                <Hero onSearch={handleSearch} />
                                {placeList ? <PlaceList placeList={placeList.slice(0, 4)} /> : null}
                            </div>
                    </div>
                    <div className='mt-1 pt-1 lg:mt-[1px] md:mt-[2px]'>
                                  <Attractions />
                    </div>
                </div>
        </PlaceListContext.Provider>
    </div>
  )
}

export default page

