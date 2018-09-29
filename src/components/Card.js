import React from 'react';

import WeatherIcon from './WeatherIcon/';

const Card = (props) => {
  const {icon, date} = props.data;
  return (
    <div className="card text-center">
      <div className="card-body">
       <WeatherIcon icon={icon.name} size={icon.size}/>
        <div className="card-text">
          <div className="box-temperature">
            <p className="temperature current">22º <small className="tiny-text">C</small></p>
            <p className="temperature max-min">21º/5º</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        {date}
      </div>
    </div>
  )
};

export default Card;