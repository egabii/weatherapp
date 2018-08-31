import React from 'react';

import logo from '../logo.svg';

const Header = (props) => {
    return (
        <header className="App-header">
        <div style={{margin: '0 auto', width: '250px'}}>
          <img src={logo} className="App-logo" alt="logo"  style={{display: 'block', margin: '0 auto'}}/>
          <h1 className="App-title">Welcome to Weather App</h1>
        </div>
      </header>
    )
};

export default Header;