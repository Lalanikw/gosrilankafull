// import { UserLocationContext } from '@/context/UserLocationContext';

import { LoadScript, GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import flower from '../public/flower.jpg'

function GoogleMapView() {

  const containerStyle = { width: '100%', height: '85vh', borderRadius:20 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const markers = [
    {
      id: 1,
      name: "Dalada Maligawa",
      position: { lat: 7.294, lng: 80.641 },
      image: "/dalada.jpg",
      url:"https://www.google.com"
    },
    {
      id: 2,
      name: "Yala National Park",
      position: { lat: 6.464, lng: 81.472 },
    },
    {
      id: 3,
      name: "Polonnaruwa",
      position:{lat:7.940, lng:81.019},
    },
    {
      id: 4,
      name: "Anuradhapura",
      position: { lat: 8.312, lng: 80.410 },
    },
    {
      id: 5,
      name: "Sigiriya",
      position: { lat: 7.957, lng: 80.760 },
    },
    {
      id: 6,
      name: "KiteSurfing",
      position:{lat:8.231, lng:79.744},
    },
    {
      id: 7,
      name: "Nagadeepa",
      position:{lat:9.613, lng:79.774},
    },
    {
      id: 8,
      name: "Galle Dutch Fort",
      position:{lat:6.031, lng:80.215},
    },
    {
      id: 9,
      name: "Ella",
      position:{lat:6.878, lng:81.06},
    },
    {
      id: 10,
      name: "Arugambay",
      position:{lat:6.840, lng:81.837},
    },
    {
      id: 11,
      name: "Mirissa",
      position:{lat:5.948, lng:80.535},
    },
    {
      id: 12,
      name: "Sripada",
      position:{lat:6.810, lng:80.499},
    },
  ]
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (!apiKey) {
    // Handle the case when the API key is not defined
    console.error('Google Maps API key is not defined.');
    return null; // or return a placeholder, an error message, or take appropriate action
  }

  const coordinate = { lat: 8, lng: 80.5 }

  return (
    <div className=''>

      <LoadScript googleMapsApiKey={apiKey} >

          <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinate}
                    zoom={7.5}
          onClick={() => setActiveMarker(null)}>
          
          {markers.map(({ id, name, position}) => (
              <MarkerF
                key={id}
                position={position}
                icon={flower}
              
                      onClick={() => handleActiveMarker(id)}>
                      {
                        activeMarker === id ? <InfoWindowF
                          onCloseClick={() => setActiveMarker(null)}
                        >
                            <div>{name}</div>

                        </InfoWindowF> : null 
                      }
              </MarkerF>
            )
            )
          }
            {/* markers */}

          </GoogleMap>

        </LoadScript>

    </div>
  )
}

export default GoogleMapView
