import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Countdown from "react-countdown-now";

const Completionist = () => (
  <Container className="py-lg-5 py-3">
    <Row className="text-center" style={{ fontSize: "3rem" }}>
      <Col lg="12">
        <h1 className="wsf-grey is-size-1">Wood Sound Festival Sunset Edition 2020</h1>
        <h5 className="wsf-red has-text-weight-bold is-size-1 animated pulse infinite">
          It's time!
        </h5>
        <h5 className="wsf-red has-text-weight-bold is-size-1 animated pulse infinite">
          Enjoy your Wood Sound Festival!
        </h5>
      </Col>
    </Row>
  </Container>
);
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    return (
      <Container className="py-lg-5 py-3">
        <Row className="text-center" style={{ fontSize: "3rem" }}>
          <Col lg="12">
            <h1 className="wsf-grey is-size-1">Wood Sound Festival Sunset Edition</h1>
            <h5 className="wsf-red has-text-weight-bold is-size-5">
              28 AGOSTO H18:00
            </h5>
          </Col>
        </Row>
        <section className="container mt-3">
          <div className="columns is-centered px-lg-5 mx-lg-5">
            <div className="column wsf-red is-narrow is-2">
              <h1 className="is-size-1">{days}</h1>
              <p className="font-weight-light">GIORNI</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1 className="is-size-1">{hours}</h1>
              <p className="font-weight-light">ORE</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1 className="is-size-1">{minutes}</h1>
              <p className="font-weight-light">MINUTI</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1 className="is-size-1">{seconds}</h1>
              <p className="font-weight-light">SECONDI</p>
            </div>
          </div>
        </section>
      </Container>
    );
  }
};

export default () => (
  <Countdown date={new Date(2020, 7, 28, 18, 0, 0)} renderer={renderer} />
);
