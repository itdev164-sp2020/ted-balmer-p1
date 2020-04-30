module.exports = {
  siteMetadata: {
    title: `Celtic Treen`,
    description: `Hand crafted objects from wood.`,
    author: `Ted Balmer`,
    contact: {
      name: `Ted Balmer`,
      company: `MarchTwenty`,
      email: `email@email.com`,
      address: `123 Fake St. Milwaukee, WI`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'bbrx7m1fl8tr',
        accessToken: 'vi98wfKgY1b4JS9qrn3wcA3BXmZqYXwOgVbnLyl9FB8'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1e90ff`,
        theme_color: `#1e90ff`,
        display: `minimal-ui`,
        icon: `src/images/m20-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
