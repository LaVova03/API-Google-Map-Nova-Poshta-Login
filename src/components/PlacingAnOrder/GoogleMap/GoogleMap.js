import './GoogleMap.css';
import { GoogleMap, DirectionsService, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';

const Map = ({ itemNp }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [directions, setDirections] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDqlVrfzQKPFCW5Jq_7Iz4PlzwkalwZMdk',
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting current location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }

    }, []);

    const directionsCallback = (result, status) => {
        if (status === 'OK') {
            setDirections(result);
        } else {
            console.error(`Error fetching directions: ${status}`);
        }
    };

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '320px' }}
            center={currentLocation || { lat: 0, lng: 0 }}
            zoom={15}
        >
            {currentLocation && itemNp && <DirectionsService
                options={{
                    destination: itemNp,
                    origin: currentLocation,
                    travelMode: 'DRIVING',
                }}
                callback={directionsCallback}
            />}
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    );
};

export default Map;