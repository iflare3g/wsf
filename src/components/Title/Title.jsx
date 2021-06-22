import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, classNameColor }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h3 className={`section-title ${classNameColor}`}>{title}</h3>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  classNameColor: PropTypes.string,
};

export default Title;
