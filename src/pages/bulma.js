import React from "react";
import Navbar from "../components/navbar";
import Map from "../components/map";

export default () => (
  <React.Fragment>
    <Navbar />
    <section className="hero is-medium is-primary has-text-centered bg-contacts">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-dark is-size-2">Contatti</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half notification">
            <div className="container">
              <h1 className="title">Contatti</h1>
              <h2 className="subtitle has-text-weight-light">
                Come raggiungere il Wood Sound Festival
              </h2>
              <ul className="mt-3 mb-5 contacts">
                <li>
                  <a
                    href="mailto:woodsoundfestival@gmail.com"
                    className="mt-3 font-weight-light wsf-grey has-no-decoration"
                  >
                    woodsoundfestival@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@woodsoundfestival.site"
                    className="mt-3 font-weight-light wsf-grey has-no-decoration"
                  >
                    info@woodsoundfestival.site
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+393347944763"
                    className="mt-3 font-weight-light wsf-grey has-no-decoration"
                  >
                    +39 334 79 44 763
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <Map />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
