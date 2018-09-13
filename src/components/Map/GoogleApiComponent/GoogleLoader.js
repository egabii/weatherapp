import React, {Component} from 'react';

import GoogleApiConfig from './GoogleApiConfig';

const createScriptJs = (initName) => {
  const _script = document.createElement('script');
  _script.src = `${GoogleApiConfig.url}?key=${GoogleApiConfig.apiKey}&&callback=${initName}`;
  _script.async = true;
  _script.defer = true;
  return _script;
};

const GoogleLoaderWithScript = (WrappedComponent, { idMap = 'map', props }) => {

  return class extends Component {

    constructor(props){
      super(props);
      this.state = {
        map: null,
        displayInitName: 'initMap'
      }
    }

    initMap (){
      this.setState({
        map: new window.google.maps.Map(document.getElementById(idMap), { ...props }),
      });
    }

    componentDidMount (){
      document.getElementById('root').addEventListener('load', function () {
        document.getElementsByTagName('body')[0].appendChild(createScriptJs(this.state.displayInitName));
      });
    }

    render (){
      return <WrappedComponent map={this.state.map} idMap={idMap} />
    }
  }
}

export default GoogleLoaderWithScript;