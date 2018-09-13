import React from 'react';


import GoogleLoaderWithScript from './GoogleApiComponent/GoogleLoader';
import GoogleMap from './GoogleApiComponent/GoogleMap';

const WeatherMap = () => {
    const GoogleMapWithScript = GoogleLoaderWithScript(GoogleMap, { idMap: 'map', center: {lat: -34.397, lng: 150.644}, zoom: 8 })
    return <GoogleMapWithScript />;
};

export default WeatherMap;
