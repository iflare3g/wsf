import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/festival.scss";

export default ({ data }) => (
  <Layout fluid="fluid">
    <SEO
      title="Il Festival"
      description="La serata sarà arricchita da numerosi artisti che si sostituiranno
      sul palco variando generi e stili musicali. La line up è in continua
      evoluzione, ogni aggiornamento potete trovarlo sui nostri canali
      social. Il WSF è alla sua seconda edizione, con il successo del 2017
      e la partecipazione della Main Guest GAZZELLE oltre a tutta la line
      up composta da: Umberto Scaramozza, I Bytecore, Raffaele Pelosi,
      Benny Sola, Antonio Viceconte e Massimo Cantisani, lo staff è
      riuscito a portare a termine una splendida serata superando le loro
      stesse aspettative. Con l’edizione del 2018 l’organizzazione vuole
      ripetersi nell’impresa, proponendo una serata all’insegna di buona
      musica, offrendo cibo e bevande di qualità e fornendo un pregevole
      intrattenimento nell’accogliente area del “Boschetto del Lago
      Sirino”. Il WSF non sarà solo musica, ma una celebrazione dell’arte
      in tutte le sue forme, una vera attività di promozione del
      territorio e una valida occasione di condivisione e aggregazione
      giovanile."
    />
    <div className="mt-3 hero is-medium is-light">
      <div className="hero-body">
        <h1 className="wsf-grey is-bold">Il Festival</h1>
      </div>
    </div>
    <div className="columns mt-5 festival">
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf1.childImageSharp.fluid}
            alt="wsf-1"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf2.childImageSharp.fluid}
            alt="wsf-2"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
    </div>
    <div className="columns">
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf3.childImageSharp.fluid}
            alt="wsf-3"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf4.childImageSharp.fluid}
            alt="wsf-4"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
    </div>
    <div className="columns">
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf5.childImageSharp.fluid}
            alt="wsf-3"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
      <div className="column is-half">
        <figure className="image is-square has-shadow d-flex">
          <Img
            fluid={data.wsf6.childImageSharp.fluid}
            alt="wsf-4"
            style={{ position: "unset" }}
          />
        </figure>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    wsf1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wsf2: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wsf3: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wsf4: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wsf5: file(relativePath: { eq: "5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wsf6: file(relativePath: { eq: "6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
