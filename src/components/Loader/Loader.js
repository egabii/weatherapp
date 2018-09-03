import React, { Fragment } from 'react';

import './Loader.css';
import spinner from './spinner.png';

const Spinner = () => {
  const wrapper = {
    margin: '0 auto',
    padding: '5px',
    width: '100px'
  };
  return (
    <div style={wrapper}>
      <img src={spinner} className="loader"/>
    </div>
  )
}


export const Loader = (WrappedComponent) => {
  return function ({isIdle}) {
    return (
      <Fragment>
          { isIdle ? <Spinner /> : <WrappedComponent /> }
      </Fragment>
    )
  }
}