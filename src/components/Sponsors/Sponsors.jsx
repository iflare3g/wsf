import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Sponsors = () => {
  const { sponsors } = useContext(PortfolioContext);

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
    <section id="sponsors">
      <Container fluid>
        <div className="project-wrapper">
          <Title title="Official Partners" classNameColor="wsf-magenta" />
          <Row>
            {sponsors.map((sponsor) => {
              const { id, img } = sponsor;
              return (
                <Col className="my-5" key={id}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" aria-label="Project Link" rel="noopener noreferrer">
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded sponsors">
                            {/* eslint-disable-next-line global-require,import/no-dynamic-require */}
                            <img
                              src={require(`../../images/${img}`)}
                              alt="sponsor"
                              height="200px"
                              width="300px"
                            />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
