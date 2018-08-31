import React from 'react';


const WeatherIcon = ({icon, size = 3}) => {
    const classname = `display-${size} wi ${icon} color-default`
    return (
        <div className="box-icon icon-condition">
            <i className={classname}></i>
        </div>
    )
}

export default WeatherIcon