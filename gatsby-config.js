const name = "Noice";
const tagline = "Natural calming noise";

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    name: name,
    tagline: tagline,
    description: "Relax and boost productivity with natural calming noise.",
    twitter: "@trynoice",
    site_url: "https://trynoice.com",
    playstore_url:
      "https://play.google.com/store/apps/details?id=com.github.ashutoshgngwr.noice",
    fdroid_url:
      "https://f-droid.org/en/packages/com.github.ashutoshgngwr.noice/",
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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              isIconAfterHeader: true,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
  ],
};
