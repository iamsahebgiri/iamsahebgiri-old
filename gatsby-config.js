module.exports = {
  siteMetadata: {
    title: `Saheb Giri's Personal Blog`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
          color: `#0052CC`,
          showSpinner: false
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 9.09 10.67"><defs><style>.cls-1{fill:#0052cc;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M4.85,10.67H3.57l.94-2.78H2.88L2,10.67H.67L1.6,7.89H0L.35,6.78H2l1-2.88H1.3l.33-1.08H3.31L4.24,0H5.52L4.59,2.82H6.21L7.14,0H8.42l-1,2.82H9.09L8.77,3.9H7.1l-1,2.88H7.82L7.49,7.89H5.78Zm0-3.89,1-2.88H4.21l-1,2.88Z"/></g></g></svg>`,
              className: `hash`
            },
          },
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-prismjs`,
            // options: {
            //   classPrefix: 'gatsby-code-',
            // }
          },
            `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },

  ]
}
