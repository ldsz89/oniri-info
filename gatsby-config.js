module.exports = {
  siteMetadata: {
    title: "Oniri Information",
    description: "A site detailing the fantasy race, Oniri, created for a science fiction role playing game."
  },
  plugins: [
    "gatsby-plugin-flow",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-127717268-4",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
