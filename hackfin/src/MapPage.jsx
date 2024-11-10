//@ts-ignore
import { GOOGLE_API } from "../api.js";
import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { isNullishCoalesce } from "typescript";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const initialCenter = {
    lat: -33.860664,
    lng: 151.208138,
};

function MapPage() {

    

    const [center, setCenter] = useState(
        initialCenter
    );
    
    const marker = useRef(null);

    // Function to handle input and pan to new coordinates
    const handleCoordinateChange = (e) => {

        e.preventDefault();        

        const newLat = parseFloat(
            e.currentTarget.elements.namedItem("lat")
                .value
        );

        const newLng = parseFloat(
            e.currentTarget.elements.namedItem("lng")
                .value
        );
        let newLocation = { lat: newLat, lng: newLng }
        marker.current.position = newLocation;
        setCenter(newLocation);
    };
    const LoadMarker = async (map) =>
    {
        
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");   
        
        if (marker.current==null)
        {
            marker.current = new AdvancedMarkerElement(
            {
                position: center,
                map: map,
                gmpDraggable: true
            });
            console.log("was null now map is " + marker.current.map);
        }
        else
        {                        
            marker.current.position=center;                          
            console.log("wasm't null map is " + marker.current.map);  
        }
        
        marker.current.map=map;
        
        
        console.log(marker.current.position.lat + " " + marker.current.map);    

    }

    return (
        <LoadScript googleMapsApiKey={GOOGLE_API}>
            <div>
                <form onSubmit={handleCoordinateChange}>
                    <input name="lat" placeholder="Latitude" />
                    <input name="lng" placeholder="Longitude" />
                    <button type="submit">Pan to Location</button>
                </form>

                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={4}
                    
                    onLoad={LoadMarker}                        
                    //onCenterChanged={()=>{console.log("penis"); LoadMarker(this)}}               
                    options={{ mapId: "6e120bcd575d29f7", 
                        restriction: {
                            latLngBounds: {
                                north: 49.5,
                                south: 24,
                                east: -65,
                                west: -127
                            }                             
                        }
                    }}
                >                

                </GoogleMap>
            </div>
        </LoadScript>
    );
}

export default MapPage;
