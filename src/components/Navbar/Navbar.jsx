import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import logo from '../../images/LOGO.svg';

const NavBar = () => (
  <Navbar expand="xl" className="p-4 shadow-lg wsf-bg-dark-blue" collapseOnSelect>
    <Navbar.Brand href="#home">
      <img src={logo} alt="WSF Logo" id="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/" className="navbar-link wsf-magenta">
          Home
        </Nav.Link>
        <Nav.Link
          href="https://www.diyticket.it/events/Musica/5240/wood-sound-festival-joan-thiele-merlot-delga-novecento"
          className="navbar-link wsf-magenta"
          rel="noopener noreferrer"
          target="_blank"
        >
          Acquista il tuo biglietto!
        </Nav.Link>
        <Nav.Link
          className="navbar-link wsf-magenta"
          onClick={() =>
            scroller.scrollTo('footer', {
              smooth: true,
              offset: -70,
              duration: 500, // eslint-disable-next-line prettier/prettier
            })}
        >
          Contatti
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
