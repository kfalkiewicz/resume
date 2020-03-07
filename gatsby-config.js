/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    charSet: 'utf-8',
    description: 'This is my personal resume created with gatsby.js',
    lang: 'en',
    robots: 'noindex, nofollow',
    title: 'Resume',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        typeName: `Json`,
      },
    },
  ],
};
