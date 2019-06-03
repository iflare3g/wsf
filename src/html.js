import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <title>Wood Sound Festival</title>
        <meta name="title" content="Wood Sound Festival " />
        <meta
          name="description"
          content="Il Wood Sound Festival è un inno alle cose belle della vita. Musica, Arte in tutte le sue forme, Cibo e molto altro ancora..."
        />
        <meta
          name="keywords"
          content="festival music sound basilicata wood lago sirino"
        />
        <meta name="author" content="Wood Sound Festival" />
        <meta name="copyright" content="Wood Sound Festival" />
        <meta httpEquiv="Reply-to" content="woodsoundfestival@gmail.com" />
        <meta httpEquiv="content-language" content="IT" />
        <meta httpEquiv="Content-Type" content="text/html; iso-8859-1" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="creation_Date" content="05/24/2019" />
        <meta name="revisit-after" content="30 days" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.8.2/css/svg-with-js.css"
          rel="stylesheet"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
