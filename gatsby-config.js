/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Wood Sound Festival",
    titleTemplate: "%s | Wood Sound Festival",
    description:
      "La serata sarà arricchita da numerosi artisti che si sostituiranno sul palco variando generi e stili musicali. La line up è in continua evoluzione, ogni aggiornamento potete trovarlo sui nostri canali social. Il WSF è alla sua seconda edizione, con il successo del 2017 e la partecipazione della Main Guest GAZZELLE oltre a tutta la line up composta da: Umberto Scaramozza, I Bytecore, Raffaele Pelosi, Benny Sola, Antonio Viceconte e Massimo Cantisani, lo staff è riuscito a portare a termine una splendida serata superando le loro stesse aspettative. Con l’edizione del 2018 l’organizzazione vuole ripetersi nell’impresa, proponendo una serata all’insegna di buona musica, offrendo cibo e bevande di qualità e fornendo un pregevole intrattenimento nell’accogliente area del “Boschetto del Lago Sirino”. Il WSF non sarà solo musica, ma una celebrazione dell’arte in tutte le sue forme, una vera attività di promozione del territorio e una valida occasione di condivisione e aggregazione giovanile.",
    url: "https://www.woodsoundfestival.it", // No trailing slash allowed!
    facebookUsername: "woodsoundfestival",
  },
  plugins: [
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
