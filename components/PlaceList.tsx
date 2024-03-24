import React from 'react'
import PlaceItemCard from './PlaceItemCard'

function PlaceList({ placeList}: any) {

  return (
      <div className='px-[10px] md:px-[120px] mt-5 z-10'>
          <h2 className='text-[20px] font-bold'> </h2>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
              {placeList.map((place:any, index:number) => (
                  <div className='z-10'key={index}>
                      <PlaceItemCard place={place} />
                </div>
              ))}
      </div>
    </div>
  )
}

export default PlaceList
