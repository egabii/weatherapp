import React from 'react';

import Icon from './Icon';

const WeatherIcon = ({icon, size = 3}) => {
    const classname = `display-${size} color-default`
    return (
        <div className="box-icon icon-condition">
            <Icon icon={icon} customClasses={classname} />
        </div>
    )
}

export default WeatherIcon