// import { UserLocationContext } from '@/context/UserLocationContext';

//new dependency npm i @react-google-maps/api

import { LoadScript, GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api'
import Link from 'next/link';
import React, { useContext, useState } from 'react'

function GoogleMapView({ place }) {

  const containerStyle = { width: '100%', height: "70vh" }
  const cordinate = { lat: 8, lng: 80.5 }
  
    return (
    <div className=''>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={cordinate}
          zoom={7.45}>
            {place &&
            place.map((p, index) => (
              <MarkerF key={index} position={{ lat: p.geometry.location.lat, lng: p.geometry.location.lng }} />
            ))}
        </GoogleMap>
        </LoadScript>
    </div>
  );
}

export default GoogleMapView
