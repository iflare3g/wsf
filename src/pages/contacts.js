import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/navbar";

export default () => (
  <section>
    <Navbar />
    <Container
      fluid
      className="bg-contacts d-flex justify-content-center align-items-center animated fadeIn"
    >
      <h1 className="wsf-grey">Contatti</h1>
    </Container>
    <Container fluid className="text-center animated fadeInUp">
      <Row className="py-5">
        <Col lg="4">
          <h3 className="wsf-grey">Contatti</h3>
          <ul className="mt-3 mb-5 contacts">
            <li>
              <a href="mailto:woodsoundfestival@gmail.com" className="mt-3 font-weight-light wsf-grey">
              woodsoundfestival@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:info@woodsoundfestival.site" className="mt-3 font-weight-light wsf-grey">
                info@woodsoundfestival.site
              </a>
            </li>
            <li>
              <a href="tel:+393347944763" className="mt-3 font-weight-light wsf-grey">
              +39 334 79 44 763
              </a>
            </li>
          </ul>
        </Col>
        <Col lg="4">
          <h3 className="wsf-grey">Dove siamo</h3>
          <p className="mt-3 font-weight-light">
            Il festival è situato al Lago Sirino di Nemoli, in provincia di
            Potenza (Basilicata).
          </p>
        </Col>
        <Col lg="4">
          <h3 className="wsf-grey">In treno</h3>
          <p className="mt-3 font-weight-light">
            Stazione di Sapri (34 km), Stazione di Maratea (33 Km) poi
            proseguire in pullman o taxi
          </p>
        </Col>
        <Col lg="4">
          <h3 className="wsf-grey">In auto</h3>
          <p className="mt-3 font-weight-light">
            Autostrada Salerno Reggio Calabria: da Nord, uscita Lagonegro (Nord
            o Sud), poi SPexSS 19 direzione Lago Sirino Nemoli (10 Km);
            Autostrada Salerno Reggio Calabria: da Sud, uscita Lauria Nord, poi
            SPexSS 19 direzione lago Sirino Nemoli (8,5 KM); Dalla SS653
            Sinnica, uscita Pecorone poi Sp ex SS 19 in direzione Lago Sirino
            (8,5 Km); Dalla SS585 Fondo Valle del Noce, uscita Nemoli poi
            direzione lago Sirino (9 Km)
          </p>
        </Col>
        <Col lg="4">
          <h3 className="wsf-grey">In aereo</h3>
          <p className="mt-3 font-weight-light">
            Napoli (200 Km) Lamezia Terme (194 Km) poi proseguire in pullman o
            taxi
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);
