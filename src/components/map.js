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
          defaultCenter={{ lat: 40.0924661, lng: 15.8078624 }}
          defaultZoom={18}
          defaultOptions={{ mapTypeControl: false }}
        >
          <Marker
            position={{ lat: 40.0924661, lng: 15.8078624 }}
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
      <React.Fragment>
        <GoogleMapExample
          containerElement={<div className="hero" />}
          mapElement={<div className="hero is-fullheight" />}
          googleMapURL={
            process.env.NODE_ENV === "development"
              ? `https://maps.googleapis.com/maps/api/js?v=3&key=${
                  process.env.GOOGLE_API_KEY
                }&ver=3.10`
              : `https://maps.googleapis.com/maps/api/js?v=3&key=${
                  process.env.GATSBY_GOOGLE_API_KEY
                }&ver=3.10`
          }
          loadingElement={<h1>Loading...</h1>}
        />
      </React.Fragment>
    );
  }
}
export default Map;
