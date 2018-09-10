import React, { Component, Fragment } from 'react';

const YOUR_API_KEY = 'AIzaSyBtRhrKTzH19dsotVYa6w373Pee3UFdPP0';
const url = "https://maps.googleapis.com/maps/api/js";

class WeatherMap extends Component {

    constructor(props, context) {
        super(props, context);
    }

    /*     initMap (){
            const center = new window.google.maps.LatLng(39.305, -76.617);
            this.map = new window.google.maps.Map(document.getElementById('map'), {
                center,
                zoom: 8
            });
        } */

    componentDidMount() {
        //this.initMap();
    }

    render() {

        return (
            <Fragment>
                <div id="map"></div>
                <script>
                    {
                        function initMap() {
                            const center = new window.google.maps.LatLng(39.305, -76.617);
                            this.map = new window.google.maps.Map(document.getElementById('map'), {
                                center,
                                zoom: 8
                            });
                        }
                    }
                </script>
                <script src={`${url}?key=${YOUR_API_KEY}&callback=initMap`} async defer></script>
            </Fragment>
        )
    }

}

export default WeatherMap;