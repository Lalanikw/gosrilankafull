import React from 'react'
import Image from 'next/image'

const BASE_URL_PHOTO="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400"


function PlaceItemCard({ place }:any) {
  return (
    <div className='flex w-full z-10 border-[1px] rounder-x1 shadow-md p-2'>
      {place && place.photos && place.photos.length > 0 && (
        <Image src={BASE_URL_PHOTO+"&photo_reference="+place?.photos[0]?.photo_reference+"&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
          alt="placeholder" width={200} height={80}
          className="w-auto h-[100px] object- rounded-t-xl" />
      )}
      <div className='p-1'>
        <h2 className='line-clamp-2'>{place.name}</h2>
        <div className='gap-2 mt-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 25 25" strokeWidth={1.6} stroke="currentColor"
                className="w-4 h-4 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
              <h2 className='text-[12px] text-gray-400 line-clamp-2'>{place.formatted_address}</h2>
        </div>
      </div>
    </div>
  )
}

export default PlaceItemCard

