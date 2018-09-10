import React, { Component } from 'react';

import './App.css';

// dependencies
import Panel from '../Panel';
import WeatherIcon from '../WeatherIcon';
import WeatherMap from '../Map/Map';
/* import FormPanel from '../FormPanel'; */
// common
import Header from '../../common/Header';

class App extends Component {

  constructor(props){
    super(props)

    this.onChange = this.onChange.bind(this);
    this.state = {
      items:[
        {
          id: 'Monday-1',
          date: 'Monday',
          icon: {
            name:'wi-day-sunny',
            size: 3
          }
        },
        {
          id: 'Tuesday-2',
          date:'Tuesday',
          icon: {
            name:'wi-day-sunny',
            size: 3
          }
        },
        {
          id: 'Wednesday-3',
          date: 'Wednesday',
          icon: {
            name:'wi-day-sunny',
            size: 3
          }
        },
        {
          id: 'Thursday-4',
          date: 'Thursday',
          icon: {
            name:'wi-day-sunny',
            size: 3
          }
        }
      ],
      icon: {
        name:'wi-day-sunny',
        size: 3
      }
    };
  }

  onChange (){
    console.log('on change sumbit');
  }

  render (){
    return (
      <div className="App">
        <Header />
        <section className="container-fluid">
          <div className="row">
            <section className="col-md-8 col-sm-12">
              <div className="row today-forecast bg-grey box">
                <div className="col-md-8 col-sm-12 col-lg-9">
                  <h3>Ciudad de Resistencia</h3>
                  <p>dom, 26 de agosto 4:33 PM</p>
                  <p>Soleado</p>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-3 box-condition">
                  <WeatherIcon icon={this.state.icon.name} size={this.state.icon.size} />
                  <div className="box-temperature">
                    <p className="temperature current">22º <small className="tiny-text">C</small></p>
                    <p className="temperature max-min">21º/5º</p>
                  </div>
                </div>
              </div>
              <div className="row next-five-days bg-grey box">
                <Panel items={this.state.items} />
              </div>
            </section>
            <section className="col-md-4 col-sm-12">
              {
                //<FormPanel onSubmit={this.onChange}/>
              }
              <WeatherMap />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
