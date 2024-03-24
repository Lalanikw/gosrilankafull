import { PlaceListContext } from "../context/PlaceListContext";
import { Marker as MarkerF } from "@react-google-maps/api";
import React, { useContext } from 'react';

function CustomMarker() {
    const {placeList}=useContext(PlaceListContext)

    return (
        <div>
            {placeList&&placeList.map((place) => (

                <MarkerF
                    position={place.geometry.location}
                    icon={{
                        url: '/map-icon.png',
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
export default CustomMarker