import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/festival.scss";

export default () => (
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
        <figure className="image is-3by2 has-shadow">
          <img src="https://scontent-fco1-1.xx.fbcdn.net/v/t1.0-9/41363460_1296418770496446_2908830372890411008_o.jpg?_nc_cat=111&_nc_ht=scontent-fco1-1.xx&oh=e5e7ea668c8b99bf1f3e31ae5ee00766&oe=5D595108" />
        </figure>
      </div>
      <div className="column is-half">
        <figure className="image is-3by2 has-shadow">
          <img src="https://scontent-fco1-1.xx.fbcdn.net/v/t1.0-9/41177730_1296421010496222_4346051478104834048_o.jpg?_nc_cat=107&_nc_ht=scontent-fco1-1.xx&oh=409a792e40b0fb7d4dd3e658f2469d5f&oe=5D952DDA" />
        </figure>
      </div>
    </div>
    <div className="columns">
      <div className="column is-half">
        <figure className="image is-3by2 has-shadow">
          <img src="https://scontent-fco1-1.xx.fbcdn.net/v/t1.0-9/41151291_1296423093829347_5143121017954107392_o.jpg?_nc_cat=103&_nc_ht=scontent-fco1-1.xx&oh=902348bdb81836878618f4bc86b5c197&oe=5D972F79" />
        </figure>
      </div>
      <div className="column is-half">
        <figure className="image is-3by2 has-shadow">
          <img src="https://scontent-fco1-1.xx.fbcdn.net/v/t1.0-9/41165903_1296423023829354_449879798278258688_o.jpg?_nc_cat=107&_nc_ht=scontent-fco1-1.xx&oh=eb4d6c33c7545871eaba4ceb66e8c525&oe=5D8FB81C" />
        </figure>
      </div>
    </div>
  </Layout>
);
