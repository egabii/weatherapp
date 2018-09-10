import React, { Fragment } from 'react';

import './Loader.css';
import spinner from './spinner.png';

const Spinner = () => {
  return (
    <div className="loader-wrapper">
      <img src={spinner} alt="" className="loader"/>
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