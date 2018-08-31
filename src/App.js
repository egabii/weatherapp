import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Panel from './components/Panel';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      items:['Monday', 'Tuesday', 'Wednesday', 'Thursday']
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather App</h1>
        </header>
        <section className="container">
          <div className="row">
            <section className="col-8">
              <div className="today-forecast row">
                <div className="col-8">
                  <h3>Ciudad de Resistencia</h3>
                  <p>dom, 26 de agosto 4:33 PM</p>
                  <p>Soleado</p>
                </div>
                <div className="col-4 box-condition">
                  <div className="box-icon icon-condition">
                    <i className="display-2 wi wi-day-sunny color-default"></i>
                  </div>
                  <div className="box-temperature">
                    <p className="temperature current">22º <small className="tiny-text">C</small></p>
                    <p className="temperature max-min">21º/5º</p>
                  </div>
                </div>
              </div>
              <div className="next-five-days">
                <Panel items={this.state.items} />
              </div>
            </section>
            <section className="col-4">
              cities search section
            </section>           
          </div>
        </section>
      </div>
    );
  }
}

export default App;
