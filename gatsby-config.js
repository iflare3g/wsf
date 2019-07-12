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
    url: "https://www.woodsoundfestival.it", // No trailing slash allowed!
    ogImage: "https://wood-sound-festival.s3-eu-west-1.amazonaws.com/og.jpg"
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
        name: `Wood Sound Festival Official`,
        short_name: `Wood Sound Festival`,
        theme_color: `#d2837c`,
        background_color: `white`,
        display: `standalone`,
        orientation: `portrait`,
        Scope: `/`,
        start_url: `/`,
        icons: [
          {
            src: `/icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `/icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ],
        splash_pages: null
      }
    },
    `gatsby-plugin-offline`
  ]
};
