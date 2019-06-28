/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Wood Sound Festival",
    titleTemplate: "%s | Wood Sound Festival",
    description:
      "Il Wood Sound Festival è un inno alle cose belle della vita. Musica, Arte in tutte le sue forme, Cibo e molto altro ancora...",
    url: "https://www.woodsoundfestival.it" // No trailing slash allowed!
  },
  plugins: [
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wood Sound Festival`,
        short_name: `WSF`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/pwa.png`
      }
    },
    "gatsby-plugin-offline"
  ]
};
