import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

class CollapseText extends React.Component {
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
          className="button is-wsf-red is-outlined"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <span>Leggi di più</span>
          <span class="icon is-small">
            {open ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </a>
        <Collapse in={this.state.open}>
          <section className="section px-lg-5" id="example-collapse-text">
            {this.props.children}
          </section>
        </Collapse>
      </>
    );
  }
}

export default CollapseText;
