import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Playlist" classNameColor="wsf-magenta" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <Row>
              <Col>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src="https://open.spotify.com/embed/playlist/2CGvuUGieR1v6rYfJL7n2K"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                />
              </Col>
            </Row>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
