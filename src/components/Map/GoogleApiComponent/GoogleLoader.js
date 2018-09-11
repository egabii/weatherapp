import React from 'react';

import GoogleApiConfig from './GoogleApiConfig';

const createScriptJs = (() => {
  const _script = document.createElement('script');
  _script.src = `${GoogleApiConfig.url}?key=${GoogleApiConfig.apiKey}&&callback=initMap`;
  _script.async = true;
  _script.defer = true;
  return _script;
})();

const GoogleLoader = ({ coords, zoom, refNode = 'map' }) => {
  var map = null;

  window.addEventListener('load', function () {
    document.getElementsByTagName('body')[0].appendChild(createScriptJs);
  });

  function initMap() {
    const options = { center:coords, zoom };
    map = new window.google.maps.Map(document.getElementById(refNode), options);
  }

  return function bootstrapMap(GoogleMap) {
    return <GoogleMap map={map} idMap={refNode} />
  }
}

export default GoogleLoader;