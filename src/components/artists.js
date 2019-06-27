import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import "../styles/artists.scss";

const Artists = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        wsf: file(relativePath: { eq: "1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className={className}>
          <div className="hero-body has-text-left">
            <h1 className="title is-1 wsf-grey">Artisti</h1>
            <div className="space-divider has-shadow" />
            <div className="columns is-8 mt-4">
              <div className="column">
                <figure className="image is-square has-shadow d-flex artist">
                  <Img
                    fluid={data.wsf.childImageSharp.fluid}
                    alt="wsf-3"
                    style={{ position: "unset" }}
                  />
                  <div className="artist-name">
                    <span className="wsf-grey has-text-weight-semibold">
                      Artista
                    </span>
                  </div>
                </figure>
              </div>
              <div className="column">
                <figure className="image is-square has-shadow d-flex artist">
                  <Img
                    fluid={data.wsf.childImageSharp.fluid}
                    alt="wsf-4"
                    style={{ position: "unset" }}
                  />
                  <div className="artist-name">
                    <span className="wsf-grey has-text-weight-semibold">
                      Artista
                    </span>
                  </div>
                </figure>
              </div>
              <div className="column">
                <figure className="image is-square has-shadow d-flex artist">
                  <Img
                    fluid={data.wsf.childImageSharp.fluid}
                    alt="wsf-4"
                    style={{ position: "unset" }}
                  />
                  <div className="artist-name">
                    <span className="wsf-grey has-text-weight-semibold">
                      Artista
                    </span>
                  </div>
                </figure>
              </div>
              <div className="column">
                <figure className="image is-square has-shadow d-flex artist">
                  <Img
                    fluid={data.wsf.childImageSharp.fluid}
                    alt="wsf-4"
                    style={{ position: "unset" }}
                  />
                  <div className="artist-name">
                    <span className="wsf-grey has-text-weight-semibold">
                      Artista
                    </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
      );
    }}
  />
);

const StyledArtists = styled(Artists)`
  margin-top: 80px;
  max-width: 70vw;
`;

export default StyledArtists;
