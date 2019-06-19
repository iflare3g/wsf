import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class Quickview extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    return (
      <>
        {/* eslint-disable-next-line*/}
        <a
          class="button is-wsf-red is-outlined"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <span>Leggi di più</span>
          <span class="icon is-small">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </a>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            <p className="mt-2 text-justify pr-lg-5 pr-0 wsf-grey font-weight-light">
              Siamo una piccola associazione culturale aiutata da un gruppo di
              ragazzi volenterosi e fattivi, circa 40, provenienti da Nemoli e
              dai paesi limitrofi (Lagonegro, Lauria, Rivello) che ha voluto
              scommettere sull’arte, sull’innovazione e sulla voglia di creare
              qualcosa di importante nel territorio. La precedenti edizioni
              hanno portato ad un grande successo, giovani provenienti da tutta
              la Basilicata ma anche da altre regioni (Puglia, Calabria,
              Campania e Lazio) si sono spostati per trascorrere una piacevole
              serata e per vivere un vero e proprio Festival circondati dalle
              bellezze naturalistiche che offrono i nostri posti. La serata
              anche per questa nuova edizione sarà arricchita da numerosi
              artisti che si sostituiranno sul palco variando generi e stili
              musicali. La line up è in continua evoluzione, ogni aggiornamento
              potete trovarlo sui nostri canali social. Lo staff è nuovamente
              pronto a dare il meglio per la nuova edizione —5 per garantire la
              continuità di un Festival che ha superato le aspettative di tutti.
              Oltre alla musica, allestiremo l’area “Food and Beverage” dove si
              potranno degustare prodotti lucani e di qualità e l’area dedicata
              all’arte, dando la possibilità a chiunque voglia farsi conoscere
              attraverso le proprie creazioni artistiche in qualsiasi forma.
              Riproponiamo la politica PLASTIC FREE a cui abbiamo già aderito lo
              scorso anno in quanto il festival incarna gli ideali ambientalisti
              essendo interamente localizzata nel verde; durante l’intera
              giornata verranno usate soluzioni ecologiche in piena sintonia con
              l’ambiente come il bicchiere speciale in “POLIPROPILENE” (PP)
              riutilizzabile e riciclabile, realizzato con i macchinari e i
              processi tecnologici più all’avanguardia e nel rispetto dei
              massimi standard di sicurezza; Grazie a questa iniziativa avremo
              un vero e proprio evento GREEN e contribuiremo a salvaguardare
              l’ambiente.
            </p>
          </div>
        </Collapse>
      </>
    );
  }
}

export default Quickview;
