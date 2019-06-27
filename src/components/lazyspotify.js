import React from "react";
import Spinner from "react-spinkit";
import styled from "styled-components";

class SpotifyIframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };
  render() {
    return (
      <section className={this.props.className}>
        {this.state.loading ? (
          <Spinner
            className="loading text-center"
            name="line-scale-pulse-out-rapid"
            color="grey"
            fadeIn="none"
          />
        ) : null}
        <div className="hero-body">
          <StyledIframe
            src="https://open.spotify.com/embed/playlist/2CGvuUGieR1v6rYfJL7n2K"
            width="100%"
            height="400"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            onLoad={this.hideSpinner}
            title="spotify button playlist"
          />
        </div>
      </section>
    );
  }
}

const StyledSpotify = styled(SpotifyIframe)`
  padding: 1rem;
  max-width: 70vw;
  height: 400px;
`;

const StyledIframe = styled.iframe`
  height: 400px;
`;

export default StyledSpotify;
