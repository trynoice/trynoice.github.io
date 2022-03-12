const name = "Noice";
const tagline = "Natural calming noise";

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    name: name,
    tagline: tagline,
    description: "Relax and boost productivity with minimal background noise.",
    twitter: "@trynoice",
    site_url: "https://trynoice.com",
    playstore_url:
      "https://play.google.com/store/apps/details?id=com.github.ashutoshgngwr.noice",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `${name}: ${tagline}`,
        short_name: name,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#23232d",
        display: "browser",
        icon: "src/assets/icon-round.png",
        crossOrigin: "anonymous",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-emotion",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
  ],
};
