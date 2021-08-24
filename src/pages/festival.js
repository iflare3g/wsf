import React from 'react';
import { Helmet } from 'react-helmet';
import { Jumbotron } from 'react-bootstrap';
import { headData } from '../mock/data';
import NavBar from '../components/Navbar/Navbar';
import '../style/main.scss';

const Festival = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'it'} />
        <meta name="description" content={description || 'Wood Sound Festival'} />
      </Helmet>
      <NavBar />
      <section className="min-vh-100 py-0">
        <Jumbotron fluid className="festival-bg" />
      </section>
    </>
  );
};

export default Festival;
