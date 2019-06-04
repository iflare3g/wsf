import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import Floating from "../components/floating";
import Countdown from "../components/countdown";

export default () => (
  <React.Fragment>
    <Layout>
      <Floating />
      <Countdown />
    </Layout>
  </React.Fragment>
);
