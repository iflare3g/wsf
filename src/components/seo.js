import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, og, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          ogImage
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`,
        og: ogImage
      };
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="it_IT" />
            <meta
              property="og:image:secure_url"
              content="https://wood-sound-festival.s3-eu-west-1.amazonaws.com/og.jpg"
            />
            <meta property="og:image:type" content="image/jpeg" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

SEO.defaultProps = {
  title: null,
  description: null
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        ogImage: ogImage
      }
    }
  }
`;
