import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Countdown from "react-countdown-now";

const Completionist = () => <span>Time to have fun!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    return (
      <Container className="py-5">
        <Row className="text-center" style={{ fontSize: "3rem" }}>
          <Col lg="12">
            <h1 className="wsf-grey">Fulminacci</h1>
            <h5 className="wsf-red font-weight-bold">12 AGOSTO</h5>
          </Col>
        </Row>
        <section className="container mt-3">
          <div className="columns has-text-centered">
            <div className="column wsf-red is-narrow is-2">
              <h1>{days}</h1>
              <p className="font-weight-light">GIORNI</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1>{hours}</h1>
              <p className="font-weight-light">ORE</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1>{minutes}</h1>
              <p className="font-weight-light">MINUTI</p>
            </div>
            <div className="column wsf-red is-narrow is-2">
              <h1>{seconds}</h1>
              <p className="font-weight-light">SECONDI</p>
            </div>
          </div>
        </section>
      </Container>
    );
  }
};

export default () => (
  <Countdown date={new Date(2019, 7, 12, 19, 0, 0)} renderer={renderer} />
);
