import React, { Component } from 'react';

// dependencies
//import AsyncSearchBar from './AsyncSearchBar/AsyncSearchBar';

const searchWrapper = {
  margin: '10px 0 0'
}

const cities = [
  {
    id: 'rciaAR',
    name: 'Resistencia',
    country: 'AR'
  },
  {
    id: 'floripaBR',
    name: 'Florianopolis',
    country: 'BR'
  }
];
export default class PanelForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities
    }

    this.onChange =  this.onChange.bind(this);
  }

  onChange (){
    console.log('hola');
  }

  onActive(id){
    return (this.state.selected === id ? 'list-group-item active' : 'list-group-item');
  }
  render() {
    return (
      <div style={searchWrapper}>
        <form>
          <fieldset>
            <ul className="list-group">
              {
                this.state.cities.map(city => (<li className="list-group-item active" key={city.id}>
                    <div className="input-wrapper radio-btn">
                      <label htmlFor={`option-${city.id}`}>{'Ciudad de '+ city.name }</  label>
                      <input type="radio" id={`option-${city.id}`} value="resistencia,AR" onChange={this.onChange} />
                    </div>
                  </li>)
                )
              }
            </ul>
          </fieldset>
        </form>
      </div>
    )
  }
}