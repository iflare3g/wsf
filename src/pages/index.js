import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import Floating from "../components/floating";
import StyledArtists from "../components/artists";

export default () => (
  <React.Fragment>
    <Layout>
      <Floating />
    </Layout>
    <StyledArtists className="section hero container-fluid artists-row" />
  </React.Fragment>
);
