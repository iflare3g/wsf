import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Quickview from "../components/quickview";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => (
  <Layout fluid="fluid">
    <SEO
      title="Il Festival"
      description="Il Wood Sound Festival è una celebrazione dell'arte in tutte le sue forme, una vera
      attività di promozione del territorio e una valida occasione di
      condivisione e aggregazione giovanile nonché una vera e propria
      vetrina per il territorio, il tutto immerso nel verde e nella natura
      così per commemorare la sua immensa bellezza. Dopo il successo delle
      due precedenti edizioni 2017 e 2018, vogliamo ripeterci
      nell'impresa, proponendo nuovamente una manifestazione all'insegna
      di buona musica, offrendo cibo e bevande di qualità del posto e
      fornendo un pregevole intrattenimento nell'accogliente area del
      “Boschetto del Lago Sirino”
      Siamo una piccola associazione culturale aiutata da un gruppo di ragazzi volenterosi e fattivi, circa 40, provenienti da Nemoli e dai paesi limitrofi (Lagonegro, Lauria, Rivello) che ha voluto scommettere sull’arte, sull’innovazione e sulla voglia di creare qualcosa di importante nel territorio.
      La precedenti edizioni hanno portato ad un grande successo, giovani provenienti da tutta la Basilicata ma anche da altre regioni (Puglia, Calabria, Campania e Lazio) si sono spostati per trascorrere una piacevole serata e per vivere un vero e proprio Festival circondati dalle bellezze naturalistiche che offrono i nostri posti.
      La serata anche per questa nuova edizione sarà arricchita da numerosi artisti che si sostituiranno sul palco variando generi e stili musicali. La line up è in continua evoluzione, ogni aggiornamento potete trovarlo sui nostri canali social.
      "
    />
    <Container style={{ padding: "5% 0%" }}>
      <Row className="animated fadeInUp">
        <Col lg="6" className="mt-5">
          <figure className="image is-2by3">
            <Image
              src="http://woodsoundfestival.site/wp-content/uploads/2018/05/19657218_1005037402967919_7443921180110871691_n-1.jpg"
              height="700"
              width="500"
              className="festival-img"
            />
          </figure>
        </Col>
        <Col lg="6" className="mt-5">
          <h1
            className="text-justify"
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
          <figure className="image is-2by3">
            <Image
              src="http://woodsoundfestival.site/wp-content/uploads/2018/05/20901739_1034700070001652_4044090130539098763_o-1.jpg"
              height="700"
              width="500"
              className="festival-img"
            />
          </figure>
        </Col>
        <Col lg="6" className="mt-5 text-justify">
          <h1
            className="text-justify"
            style={{ textTransform: "uppercase", fontSize: "30px" }}
          >
            Il Festival
          </h1>
          <p className="mt-3 text-justify pr-lg-5 pr-0 wsf-grey font-weight-light">
            Il WSF è una celebrazione dell'arte in tutte le sue forme, una vera
            attività di promozione del territorio e una valida occasione di
            condivisione e aggregazione giovanile nonché una vera e propria
            vetrina per il territorio, il tutto immerso nel verde e nella natura
            così per commemorare la sua immensa bellezza. Dopo il successo delle
            due precedenti edizioni 2017 e 2018, vogliamo ripeterci
            nell'impresa, proponendo nuovamente una manifestazione all'insegna
            di buona musica, offrendo cibo e bevande di qualità del posto e
            fornendo un pregevole intrattenimento nell'accogliente area del
            “Boschetto del Lago Sirino”.
          </p>
          <Quickview />
        </Col>
      </Row>
    </Container>
  </Layout>
);
