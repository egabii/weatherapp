import React from 'react';

const Icon = ({icon, customClasses, styleIcon}) => {
  const classname = `wi wi-${icon} ${customClasses}`;

  return <i className={ classname } 
            style={ styleIcon ? styleIcon : null }></i>
}

export default Icon