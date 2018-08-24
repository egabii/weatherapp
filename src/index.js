// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Stylesheet
import 'bootstrap/dist/css/bootstrap.css';
import 'weather-icons/css/weather-icons.css';
import './index.css';

// MainComponent
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
