import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends Component {
  render() {
    const GoogleMapExample = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.0719925, lng: 15.8563272 }}
          defaultZoom={12}
          defaultOptions={{ mapTypeControl: false }}
        >
          <Marker
            position={{ lat: 40.0719925, lng: 15.8563272 }}
            icon="https://s3-eu-west-1.amazonaws.com/otix-bucket-s3/otix-new-site/marker.png"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=lago+sirino"
              )
            }
          />
        </GoogleMap>
      ))
    );
    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="hero" />}
          mapElement={<div className="hero is-fullheight" />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDsjmPszJklvGK_ecebrZFpcln-f2td6CE&ver=3.10"
          loadingElement={<h1>Loading...</h1>}
        />
      </div>
    );
  }
}
export default Map;
