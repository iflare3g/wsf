import React from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/bulma.scss";

export default () => (
  <React.Fragment>
    <Navbar />
    <section className="hero is-fullheight">
      <div className="columns is-gapless">
        <div className="column is-half">
          <div className="hero is-fullheight bg-bulma" />
        </div>
        <div className="column is-half">
          <div className="hero is-fullheight">
            <article className="px-lg-5 hero-body">
              <div className="container">
                <h1 className="title is-2 wsf-grey">Contatti</h1>
                <ul className="contacts">
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                    <a
                      href="mailto:woodsoundfestival@gmail.com"
                      className="font-weight-light wsf-grey"
                    >
                      woodsoundfestival@gmail.com
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                    <a
                      href="mailto:info@woodsoundfestival.site"
                      className="font-weight-light wsf-grey"
                    >
                      info@woodsoundfestival.site
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                    <a
                      href="tel:+393347944763"
                      className="font-weight-light wsf-grey"
                    >
                      +39 334 79 44 763
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
