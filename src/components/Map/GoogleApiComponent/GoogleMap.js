import React from 'react';

const mapStyle = {
    width: '100%',
    height: '100%',
    margin: '10px auto',
    padding: '7.5px -15px 0'
}

const GoogleMap = (props) => {
    return <div id={props.idMap} style={mapStyle}></div>
}

export default GoogleMap;