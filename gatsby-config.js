module.exports = {
  siteMetadata: {
    title: 'Rustom Ichhaporia',
    siteUrl: 'https://rustom.dev',
    description: "Welcome to Rustom Ichhaporia's home on the web.",
    image: '/icon.png', // Path in static folder
    twitterUsername: '@rustomtweets',
    socialMedia: [
      {
        name: 'Email',
        url: 'contact@rustom.dev',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/rustom',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rustom-ichhaporia',
      },
      {
        name: 'Scholar',
        url: 'https://scholar.google.com/citations?user=fhRRnW8AAAAJ',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-9KHFVG54ST'],
      },
      gtagConfig: {
        anonymize_ip: true,
      },
      pluginConfig: {
        head: true,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rustom Ichhaporia',
        short_name: 'Rustom',
        background_color: '#0a1930',
        theme_color: '#b86440',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
