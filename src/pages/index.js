import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import Floating from "../components/floating";
import StyledArtists from "../components/artists";
import StyledSpotify from "../components/lazyspotify";
import StyledFirstMay from "../components/firstmay";
import Countdown from "../components/countdown";
import "../styles/artists.scss";

export default () => (
  <React.Fragment>
    <Layout>
      <Floating />
      <Countdown />
    </Layout>
    <StyledArtists className="section hero container-fluid artists-row" />
    <StyledSpotify className="section hero container-fluid artists-row" />
    <StyledFirstMay className="section hero container-fluid artists-row" />
  </React.Fragment>
);
