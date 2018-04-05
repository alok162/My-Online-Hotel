import React, { Component } from 'react'
import Map from 'react-js-google-maps';


export default class GoogleMap extends Component {
        render() {
          const mapOptions = {
            zoom: 4,
            center: { lat: -25.363, lng: 131.044 }
          }
          const mapOptions2 = {
            zoom: 10,
            center: { lat: 41.045, lng: 29.035 }
          }
          // map2 just to show that multiple maps could be used 
          // map1 will set marker once the map is initialized
          return (
            <div>
              <Map
                id="map2"
                apiKey="AIzaSyBvRxTjtA3bAnjVtDKmp02s4u2Qh_TwT7o"
                mapOptions= {mapOptions2}
                style={{ width: 400, height: 350, float: "left" }}
              /> 
            </div>
          );
        }
      }