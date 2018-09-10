import React, {Fragment} from 'react';
// dependencies
import Card from './Card';

const Panel = (props) => {
  return (
    <Fragment>
      {
        props.items.map(item => {
          return (
            <div className="col-md col-sm" key={item.id}>
              <Card data={item}/>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default Panel;
