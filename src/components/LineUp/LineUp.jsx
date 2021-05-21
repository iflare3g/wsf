import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';

const LineUp = () => {
  const { artists } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Line Up" classNameColor="wsf-magenta" />
        <Row className="about-wrapper">
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Carousel fade>
                {artists.map((artist) => {
                  const { id, img, info } = artist;
                  return (
                    <Carousel.Item interval={1000} key={id}>
                      <AboutImg alt="profile picture" filename={img} className="d-block w-100" />
                      <Carousel.Caption>
                        <h1 className="wsf-yellow">{info}</h1>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LineUp;
