import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  artistsData,
  projectsData,
  contactData,
  footerData,
  sponsorData,
} from '../mock/data';
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LineUp from './LineUp/LineUp';
import Sponsors from './Sponsors/Sponsors';

function App() {
  const [hero, setHero] = useState({});
  const [artists, setArtists] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [sponsors, setSponsors] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setArtists([...artistsData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setSponsors([...sponsorData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, artists, projects, contact, sponsors, footer }}>
      <NavBar />
      <Hero />
      <LineUp />
      <Projects />
      <Contact />
      <Sponsors />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
