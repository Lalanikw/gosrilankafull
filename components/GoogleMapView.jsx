
// import { LoadScript, GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api'
// import React from 'react'
// import { useEffect } from 'react';

// function GoogleMapView({ places }) {

//   const containerStyle = { width: '100%', height: "70vh" }
//   const cordinate = { lat: 8, lng: 80.5 }

//   useEffect(() => {
//     console.log('Places updated:', places)
//   }, [places]);
  
//     return (
//     <div className=''>
//         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={cordinate}
//           zoom={7.45}>
//             {places &&
//             places.map((p, index) => (
//               <MarkerF
//                 key={index}
//                 position={{ lat: p.geometry.location.lat, lng: p.geometry.location.lng }} />
//             ))}
//         </GoogleMap>


import { UserLocationContext } from '../context/UserLocationContext';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

function GoogleMapView({ places }) {
  const containerStyle = { width: '100%', height: '70vh' };
  const coordinate = { lat: 8, lng: 80.5 };

    useEffect(() => {
    console.log('Places updated:', places);
  }, [places]);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={coordinate} zoom={7.45}>
          {places && places.map((place, index)=> (
            <Marker
              key={place}
              position={{ lat: place.latitude, lng: place.longitude }}
              title={place.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;