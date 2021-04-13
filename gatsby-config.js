module.exports = {
  siteMetadata: {
    title: 'Rustom Ichhaporia',
    siteUrl: 'https://rustom.dev',
    description: "The third iteration of Rustom Ichhaporia's personal website.",
    image: '/icon.png', // Path in static folder
    twitterUsername: '@rustomtweets',
    socialMedia: [
      {
        name: 'Email',
        url: 'rustom@rustom.dev',
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
      {
        name: 'Medium',
        url: 'https://rustom.medium.com',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rust.om',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/rustomtweets',
      },
      {
        name: 'Spotify',
        url:
          'https://open.spotify.com/user/shidoarichimorin?si=Ky9HbbLVQa6aZC6fpRD_zQ',
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
