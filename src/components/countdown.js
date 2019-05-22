import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default () => (
  <Container className="py-5">
    <Row className="text-center" style={{ fontSize: "3rem" }}>
      <Col lg="12">
        <h1 className="wsf-grey">Fulminacci</h1>
        <h5 className="wsf-red font-weight-bold">12 AGOSTO</h5>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col sm="3" className="wsf-red px-lg-5">
        <h1>00</h1>
        <p className="font-weight-light">MESI</p>
      </Col>
      <Col sm="3" className="wsf-red px-lg-5">
        <h1>00</h1>
        <p className="font-weight-light">GIORNI</p>
      </Col>
      <Col sm="3" className="wsf-red px-lg-5">
        <h1>00</h1>
        <p className="font-weight-light">ORE</p>
      </Col>
      <Col sm="3" className="wsf-red px-lg-5">
        <h1>00</h1>
        <p className="font-weight-light">MINUTI</p>
      </Col>
    </Row>
  </Container>
);
