const path = require(`path`);

require("dotenv").config({
  path: `.env`,
});

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
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: true
          },
        },
        sassOptions: {
          includePaths: ["src/styles"]
        }
      }
    },
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-portal",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          'API_KEY',
          'AUTH_DOMAIN',
          'DATABASE_URL',
          'PROJECT_ID',
          'APP_ID',
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-68676515-5",
      },
    },
  ],
};
