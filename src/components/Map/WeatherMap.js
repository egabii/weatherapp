import React from 'react';


import GoogleLoader from './GoogleApiComponent/GoogleLoader';
import GoogleMap from './GoogleApiComponent/GoogleMap';

const WeatherMap = () => {
    return GoogleLoader({
        coords: {},
        zoom: 8
    })(GoogleMap);
}

export default WeatherMap;
