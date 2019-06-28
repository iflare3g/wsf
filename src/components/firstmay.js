import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

const FirstMay = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        firstmay: file(relativePath: { eq: "primo-maggio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const banner = data.firstmay.childImageSharp.fluid;
      return (
        <section className={className}>
          <div className="hero-body has-text-left">
            <h1 className="title is-1 wsf-grey">Partnership</h1>
            <div className="space-divider has-shadow" />
            <figure className="image is-16by9 has-shadow d-flex mt-lg-5">
              <Img
                fluid={banner}
                alt="primo maggio banner"
                style={{ position: "unset" }}
              />
            </figure>
          </div>
        </section>
      );
    }}
  />
);

const StyledFirstMay = styled(FirstMay)`
  margin-top: 270px;
  padding: 1rem;
  max-width: 70vw;
`;

export default StyledFirstMay;
