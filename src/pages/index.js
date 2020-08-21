import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import StyledArtists from "../components/artists";
import StyledSpotify from "../components/lazyspotify";
import StyledFirstMay from "../components/firstmay";
import Countdown from "../components/countdown";
import SEO from "../components/seo";

export default () => (
  <React.Fragment>
    <SEO />
    <Layout>
      <Countdown />
    </Layout>
    <StyledArtists className="section hero container-fluid artists-row" />
    <StyledSpotify className="section hero container-fluid artists-row" />
    <StyledFirstMay className="section hero container-fluid artists-row" />
  </React.Fragment>
);
