import { PlaceListContext } from "@/context/PlaceListContext";
import { MarkerF } from "@react-google-maps/api";
import React, { useContext } from 'react'

function Marker() {
    const {placeList,setPlaceList}=useContext(PlaceListContext)

    return (
        <div>
            {placeList&&placeList.map((place) => (

                <MarkerF
                    position={place.geometry.location}
                    icon={{
                        url: '/surfer.jpg',
                        scaledSize: {
                            width: 50,
                            height:50
                        },
                }}>

            </MarkerF>
            ))}

        </div>
    )
}