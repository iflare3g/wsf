import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => (
  <Row>
    <Col lg="12">
      <img
        src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/bubbles.png"
        alt="bubbles"
        className="bubbles animated fadeInDown"
        style={{ zIndex: "0", alignSelf: "center" }}
      />
    </Col>
  </Row>
);
