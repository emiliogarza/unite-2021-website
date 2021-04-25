module.exports = {
  siteMetadata: {
    title: 'Unite Youth Gathering 2021',
    author: 'Emilio Garza',
    description: 'Official Website of the Unite Youth Gathering 2021',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/unite-logo.png',
      },
    },
    'gatsby-plugin-sass',
  ],
}
