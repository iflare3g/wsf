import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => (
  <Layout fluid="fluid">
    <Container style={{ padding: "5% 0%" }}>
      <Row className="animated fadeInUp">
        <Col lg="6" className="mt-5">
          <Image
            src="http://woodsoundfestival.site/wp-content/uploads/2018/05/19657218_1005037402967919_7443921180110871691_n-1.jpg"
            height="700"
            width="500"
            className="festival-img"
          />
        </Col>
        <Col lg="6" className="mt-5">
          <h1
            class="text-justify"
            style={{ textTransform: "uppercase", fontSize: "30px" }}
          >
            Il Lago
          </h1>
          <p className="mt-3 text-justify pr-lg-5 pr-0 wsf-grey font-weight-light">
            Nel Comune di Nemoli (PZ), nel Parco Nazionale dell’Appennino
            Lucano, è presente una gemma preziosa che la natura ha regalato agli
            abitanti della Basilicata: il Lago Sirino, un piccolo bacino idrico
            naturale della Basilicata posto alle falde della vetta omonima ad
            un’altitudine di 788 metri sul livello del mare. Sulle sue rive si
            sviluppano varie iniziative turistiche e sorgono numerosi esercizi
            commerciali raggiungibili in breve tempo. Lungo il perimetro del
            lago è presente una stradina di 1 km indicata come ciclostrada;
            nelle immediate vicinanze si può usufruire anche di un’area camper.{" "}
          </p>
        </Col>
      </Row>
      <Row className="animated fadeInUp">
        <Col lg="6" className="mt-5">
          <Image
            src="http://woodsoundfestival.site/wp-content/uploads/2018/05/20901739_1034700070001652_4044090130539098763_o-1.jpg"
            height="700"
            width="500"
            className="festival-img"
          />
        </Col>
        <Col lg="6" className="mt-5">
          <h1
            class="text-justify"
            style={{ textTransform: "uppercase", fontSize: "30px" }}
          >
            Il Festival
          </h1>
          <p className="mt-3 text-justify pr-lg-5 pr-0 wsf-grey font-weight-light">
            La serata sarà arricchita da numerosi artisti che si sostituiranno sul palco variando generi e stili musicali. La line up è in continua evoluzione, ogni aggiornamento potete trovarlo sui nostri canali social. Il WSF è alla sua seconda edizione, con il successo del 2017 e la partecipazione della Main Guest GAZZELLE oltre a tutta la line up composta da: Umberto Scaramozza, I Bytecore, Raffaele Pelosi, Benny Sola, Antonio Viceconte e Massimo Cantisani, lo staff è riuscito a portare a termine una splendida serata superando le loro stesse aspettative. Con l’edizione del 2018 l’organizzazione vuole ripetersi nell’impresa, proponendo una serata all’insegna di buona musica, offrendo cibo e bevande di qualità e fornendo un pregevole intrattenimento nell’accogliente area del “Boschetto del Lago Sirino”. Il WSF non sarà solo musica, ma una celebrazione dell’arte in tutte le sue forme, una vera attività di promozione del territorio e una valida occasione di condivisione e aggregazione giovanile.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);
