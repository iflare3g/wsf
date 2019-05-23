import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "../components/navbar";

export default ({ fluid, children }) => (
  <React.Fragment>
    <Navbar />
    <Container fluid={fluid} className="text-center">
      {children}
    </Container>
  </React.Fragment>
);
