import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CollapseText from "../components/collapse";
import StyledBackgroundSection from "../components/backgroundImage";
import "../styles/festival.scss";

export default ({ data }) => (
  <Layout fluid="fluid">
    <SEO
      title="Il Festival"
      description="Il WSF è una celebrazione dell'arte in tutte le sue forme, una vera
      attività di promozione del territorio e una valida occasione di
      condivisione e aggregazione giovanile nonché una vera e propria vetrina
      per il territorio, il tutto immerso nel verde e nella natura così per
      commemorare la sua immensa bellezza. Dopo il successo delle due
      precedenti edizioni 2017 e 2018, vogliamo ripeterci nell'impresa,
      proponendo nuovamente una manifestazione all'insegna di buona musica,
      offrendo cibo e bevande di qualità del posto e fornendo un pregevole
      intrattenimento nell'accogliente area del “Boschetto del Lago Sirino."
    />
    <StyledBackgroundSection className="mt-3 hero is-medium" />
    <section className="section">
      <h2 className="wsf-grey font-weight-light is-size-4">
        Il WSF è una celebrazione dell'arte in tutte le sue forme, una vera
        attività di promozione del territorio e una valida occasione di
        condivisione e aggregazione giovanile nonché una vera e propria vetrina
        per il territorio, il tutto immerso nel verde e nella natura così per
        commemorare la sua immensa bellezza. Dopo il successo delle due
        precedenti edizioni 2017 e 2018, vogliamo ripeterci nell'impresa,
        proponendo nuovamente una manifestazione all'insegna di buona musica,
        offrendo cibo e bevande di qualità del posto e fornendo un pregevole
        intrattenimento nell'accogliente area del “Boschetto del Lago Sirino”.
      </h2>
    </section>
    <CollapseText>
      <h2 className="wsf-grey font-weight-light is-size-4">
        Siamo una piccola associazione culturale aiutata da un gruppo di ragazzi
        volenterosi e fattivi, circa 40, provenienti da Nemoli e dai paesi
        limitrofi (Lagonegro, Lauria, Rivello) che ha voluto scommettere
        sull’arte, sull’innovazione e sulla voglia di creare qualcosa di
        importante nel territorio. La precedenti edizioni hanno portato ad un
        grande successo, giovani provenienti da tutta la Basilicata ma anche da
        altre regioni (Puglia, Calabria, Campania e Lazio) si sono spostati per
        trascorrere una piacevole serata e per vivere un vero e proprio Festival
        circondati dalle bellezze naturalistiche che offrono i nostri posti. La
        serata anche per questa nuova edizione sarà arricchita da numerosi
        artisti che si sostituiranno sul palco variando generi e stili musicali.
        La line up è in continua evoluzione, ogni aggiornamento potete trovarlo
        sui nostri canali social. Lo staff è nuovamente pronto a dare il meglio
        per la nuova edizione —5 per garantire la continuità di un Festival che
        ha superato le aspettative di tutti. Oltre alla musica, allestiremo
        l’area “Food and Beverage” dove si potranno degustare prodotti lucani e
        di qualità e l’area dedicata all’arte, dando la possibilità a chiunque
        voglia farsi conoscere attraverso le proprie creazioni artistiche in
        qualsiasi forma. Riproponiamo la politica PLASTIC FREE a cui abbiamo già
        aderito lo scorso anno in quanto il festival incarna gli ideali
        ambientalisti essendo interamente localizzata nel verde; durante
        l’intera giornata verranno usate soluzioni ecologiche in piena sintonia
        con l’ambiente come il bicchiere speciale in “POLIPROPILENE” (PP)
        riutilizzabile e riciclabile, realizzato con i macchinari e i processi
        tecnologici più all’avanguardia e nel rispetto dei massimi standard di
        sicurezza; Grazie a questa iniziativa avremo un vero e proprio evento
        GREEN e contribuiremo a salvaguardare l’ambiente.
      </h2>
    </CollapseText>

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
