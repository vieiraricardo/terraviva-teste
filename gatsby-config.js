const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,500,700`, `Hind\:300,600,900`, `Lobster\:400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://terravivamais.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: `**/styles.js`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://terravivamais.com.br',
        sitemap: 'https://terravivamais.com.br/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-168034123-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'terravivamais.com.br',
      },
    },
  ],
};
