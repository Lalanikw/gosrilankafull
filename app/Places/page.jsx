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
    try {
      const results = await fetch("/api/google-place-api?q=" + value);
      if (!results.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await results.json();

      console.log("API response:", data);
      setPlaceList(data.resp.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
        <PlaceListContext.Provider value={{placeList,setPlaceList}}>
                <div className='mt-1 pt-1 grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1'>
                    <div className='mt-2 pt-2 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
                          <GoogleMapView places={placeList} />
                            <div className='mt-1 pt-1' >
              <Hero onSearch={handleSearch} />
              {placeList && placeList.length > 0 && (
                <PlaceList places={placeList.slice(0, 4)} />
              )}
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

