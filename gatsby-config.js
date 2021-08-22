module.exports = {
  siteMetadata: {
    siteUrl: "https://feconf.kr",
    title: "FEConf2021",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      }
    },
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-68676515-5",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
