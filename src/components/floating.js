import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => (
  <Row className="floating-wrapper">
    <Col lg="12">
      <img
        src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/bubbles.png"
        alt="bubbles"
        className="bubbles animated fadeInDown"
        style={{ zIndex: "0" }}
      />
      <img
        src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/head.png"
        alt="fulminacci"
        className="head animated fadeIn"
      />
    </Col>
  </Row>
);
