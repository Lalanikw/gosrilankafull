import React from 'react'
import PlaceItemCard from './PlaceItemCard'
import { useState } from 'react';

function PlaceList({ places }) {
  
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  
  const handleSearch = (searchInput) => {
    // Implement your search logic here, e.g., filter places based on the search input
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filtered);
    setFilteredPlaces(filtered);
  };

  return (
      <div className='px-[10px] md:px-[120px] mt-5 z-10'>
          <h2 className='text-[20px] font-bold'> </h2>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
              {filteredPlaces.map((place, index) => (
                  <div className='z-10'key={index}>
                      <PlaceItemCard place={place} />
                </div>
              ))}
      </div>
    </div>
  )
}

export default PlaceList
