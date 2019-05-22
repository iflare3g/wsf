import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default () => (
  <Row className="floating-wrapper">
    <Col lg="12">
      <img
        src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/bubbles.png"
        alt=""
        className="bubbles"
      />
    <img
      src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/head.png"
      alt=""
      className="head"
    />
    </Col>
</Row>
);
