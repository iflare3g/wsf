import React from "react";
import Layout from "../components/layout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => (
  <Layout fluid="fluid">
    <Container style={{ padding: "10% 0%" }}>
      <Row>
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
      <Row>
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
    </Container>
  </Layout>
);
