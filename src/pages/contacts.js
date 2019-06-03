import React from "react";
import Navbar from "../components/navbar";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Map from "../components/map";
import "../styles/contacts.scss";

export default () => (
  <React.Fragment>
    <SEO
      title="Contatti"
      description="Nel Comune di Nemoli (PZ), nel Parco Nazionale dell’Appennino
    Lucano, è presente una gemma preziosa che la natura ha
    regalato agli abitanti della Basilicata: il Lago Sirino, un
    piccolo bacino idrico naturale della Basilicata posto alle
    falde della vetta omonima ad un’altitudine di 788 metri sul
    livello del mare. Sulle sue rive si sviluppano varie
    iniziative turistiche e sorgono numerosi esercizi commerciali
    raggiungibili in breve tempo. Lungo il perimetro del lago è
    presente una stradina di 1 km indicata come ciclostrada; nelle
    immediate vicinanze si può usufruire anche di un’area camper."
    />
    <Navbar />
    <section className="hero is-fullheight animated fadeIn">
      <div className="columns is-gapless">
        <div className="column is-half">
          <Map />
        </div>
        <div className="column is-half">
          <div className="hero is-fullheight">
            <article className="px-lg-5 hero-body">
              <div className="container">
                <h1 className="title is-2 wsf-grey is-spaced">Contatti</h1>
                <div className="space-divider" />
                <h2 className="subtitle is-6 wsf-grey">
                  Nel Comune di Nemoli (PZ), nel Parco Nazionale dell’Appennino
                  Lucano, è presente una gemma preziosa che la natura ha
                  regalato agli abitanti della Basilicata: il Lago Sirino, un
                  piccolo bacino idrico naturale della Basilicata posto alle
                  falde della vetta omonima ad un’altitudine di 788 metri sul
                  livello del mare. Sulle sue rive si sviluppano varie
                  iniziative turistiche e sorgono numerosi esercizi commerciali
                  raggiungibili in breve tempo. Lungo il perimetro del lago è
                  presente una stradina di 1 km indicata come ciclostrada; nelle
                  immediate vicinanze si può usufruire anche di un’area camper.
                </h2>
                <div className="columns">
                  <div className="column contacts">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                    <a
                      href="mailto:woodsoundfestival@gmail.com"
                      className="font-weight-light wsf-grey"
                    >
                      woodsoundfestival@gmail.com
                    </a>
                  </div>
                </div>
                <div className="columns">
                  <div className="column contacts">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                    <a
                      href="mailto:info@woodsoundfestival.site"
                      className="font-weight-light wsf-grey"
                    >
                      info@woodsoundfestival.site
                    </a>
                  </div>
                </div>
                <div className="columns">
                  <div className="column contacts">
                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                    <a
                      href="tel:+393347944763"
                      className="font-weight-light wsf-grey"
                    >
                      +39 334 79 44 763
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
