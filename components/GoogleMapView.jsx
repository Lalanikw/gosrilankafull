
import { UserLocationContext } from '../context/UserLocationContext';
import { LoadScript, GoogleMap} from '@react-google-maps/api';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Marker from './Marker';

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
          {places && places.map((place, index) => (
 <Marker/>
          ))}
         
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;