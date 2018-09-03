import React, { Component } from 'react';


// dependencies
import {Loader} from '../Loader/Loader';
import './AsyncSearchBar.css';

const searchBoxStyle = {
  outline: '1px solid #000'
};

const ResultBox = () => {
    return (
      <div> Some data was retrieve </div>
    )
}

export default class AsyncSearchBar extends Component {

  constructor(props){
    super(props);
  }

  onSearch(e){
    const idSearchBox = document.getElementById('search-box');
    if (e.target.value) {
      idSearchBox.className = idSearchBox.className.replace('on-hide','');
    } else {
      idSearchBox.className += 'on-hide';
    }
  }

  loading (){
    let result = true;
    setTimeout(() => result = false, 2000);
    return result;
  }

  render(){
    return (
      <form>
        <div className="form-group">
          <label htmlFor="input-cities" className="sr-only">City</label>
          <input type="text" 
            className="form-control" 
            id="input-cities" 
            placeholder="City"
            onChange={this.onSearch} />
        </div>
        <div id="search-box" style={searchBoxStyle} className="search-box on-hide">
          { Loader(ResultBox)({isIdle: this.loading()}) }
        </div>
      </form>
    )
  }
}