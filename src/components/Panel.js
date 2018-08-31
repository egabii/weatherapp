import React from 'react';
// dependencies
import Card from './Card';

const Panel = (props) => {
  return (
    <div className="row">
      { 
        props.items.map(item => {
          return (
            <div className="col-sm" key={item}>
              <Card data={item}/>            
            </div>
          )
        }
      ) }
    </div>
  )
}

export default Panel;
