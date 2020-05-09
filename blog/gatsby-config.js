module.exports = {
  siteMetadata: {
    title: `Celtic Treen`,
    shorttitle: `Celtic Treen`,
    subtitle: `Balmer Design Studio`,
    description: `Balmer Design Studio - Hand crafted objects from wood.`,
    author: `Ted Balmer`,
    website: `marchtwenty.com`,
    themecolor: `#ffffff`,
    themelogo: `src/images/m20-logo.png`,
    siteUrl: `localhost:8000`,
    contact: {
      name: `Ted Balmer`,
      company: `MarchTwenty`,
      email: `tbalmer@marchtwenty.com`,
      address: `Cedarburg, WI`
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
    `gatsby-plugin-sitemap`,
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
