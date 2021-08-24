import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';

const Header = () => {
  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col>
            <Title
              title="Wood Sound Festival"
              classNameColor="wsf-magenta"
              marginBottom="margin-bottom-0"
            />
            <Title
              title="Wood Sound Festival"
              classNameColor="wsf-magenta"
              marginBottom="margin-bottom-0"
            />
            <Title
              title="Wood Sound Festival"
              classNameColor="wsf-magenta"
              marginBottom="margin-bottom-0"
            />
            <Title
              title="Wood Sound Festival"
              classNameColor="wsf-magenta"
              marginBottom="margin-bottom-0"
            />
            <Title title="Wood Sound Festival" classNameColor="wsf-magenta" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title
              title="Lagonegro"
              classNameColor="wsf-yellow"
              marginBottom="margin-bottom-0"
              id="lagonegro"
            />
            <Title
              title="05 settembre 2021"
              classNameColor="text-white"
              marginBottom="margin-bottom-0"
            />
            <h3 className="section-subtitle text-white">
              Parco Fossatello Lagonegro ( PZ ) ore 12:00
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
