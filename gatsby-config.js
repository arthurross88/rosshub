module.exports = {
  siteMetadata: {
    title: `rosscoin`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-theme-ui", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-FEVQ8JQC87"
    }
  }]
};