/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projectsText/`,
      },
    },
  ],
  siteMetadata: {
    title: "My Portfolio",
    description: "web dev portfolio",
    copyright: "This website is copyright 2022 robinpunn"
  }
}
