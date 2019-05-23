import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="light"
    variant="light"
    className="animated fadeIn"
  >
    <Navbar.Brand href="/">
      <img
        src="https://s3-eu-west-1.amazonaws.com/wood-sound-festival/LogoWood.svg"
        width="100"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="wsf-grey" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/festival" className="wsf-grey">
          Festival
        </Nav.Link>
        <Nav.Link href="/contacts" className="wsf-grey">
          Contatti
        </Nav.Link>
        <Nav.Link
          href="https://www.facebook.com/woodsoundfestival/"
          className="wsf-grey social"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" className="social" />
        </Nav.Link>
        <Nav.Link
          href="https://www.instagram.com/wood_sound_festival/"
          className="wsf-grey"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" className="social" />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
