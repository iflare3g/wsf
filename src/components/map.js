import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends Component {
  render() {
    const GoogleMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.0924671, lng: 15.8073166 }}
          defaultZoom={18}
          defaultOptions={{
            mapTypeControl: false,
            gestureHandling: "cooperative"
          }}
        >
          <Marker
            position={{ lat: 40.0924671, lng: 15.8073166 }}
            icon="https://wood-sound-festival.s3-eu-west-1.amazonaws.com/marker1.png"
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
      <React.Fragment>
        <GoogleMapComponent
          containerElement={<div className="hero" />}
          mapElement={<div className="hero is-fullheight" />}
          googleMapURL={
            process.env.NODE_ENV === "development"
              ? process.env.GOOGLE_MAP_URL
              : process.env.GATSBY_GOOGLE_MAP_URL
          }
          loadingElement={<h2>Loading...</h2>}
        />
      </React.Fragment>
    );
  }
}
export default Map;
