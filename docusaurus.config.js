module.exports = {
  title: 'Kinto Docs',
  tagline: 'Deploy Apps In Clicks, Not Weeks',
  url: 'https://kintohub.com',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'KintoHub Inc.',
  projectName: 'KintoHub',
  themeConfig: {
    disableDarkMode: false,
    prism: {
      theme: require('./src/js/monokaiTheme.js')
    },
    navbar: {
      title: 'KintoHub',
      image: 'img/redux-logo-landscape.png',
      logo: {
        alt: 'Kinto Logo',
        src: 'img/kinto.svg'
      },
      links: [
        {
          label: 'Getting Started',
          to: 'mdx',
          position: 'right'
        },
        {
          label: 'Docs',
          to: 'doc1',
          position: 'right'
        },
        {
          label: 'Quickstarts',
          to: 'doc2',
          position: 'right'
        },
        {
          label: 'Guides',
          to: 'doc2',
          position: 'right'
        },
        { label: 'FAQ', to: 'faq', position: 'right' },
        {
          label: 'Need help?',
          to: 'https://www.kintohub.com/contact-us',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'introduction/getting-started'
            },
            {
              label: 'FAQ',
              to: 'faq'
            },
            {
              label: 'Video Tutorials',
              to: 'https://www.youtube.com/channel/UCpJJc0zcfzdHPw64BSP3GyQ'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord Community',
              href: 'https://discordapp.com/invite/E2CMjKP'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kintohub/'
            },
          ]
        }
      ],
      logo: {
        alt: 'KintoHub Logo',
        src: 'img/kinto.svg',
        href: 'https://kintohub.com/'
      },
      copyright: 
        `Copyright © 2017-${new Date().getFullYear()} KintoHub Inc.`
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX,
      algoliaOptions: {}
    },
    googleAnalytics: {
      trackingID: 'UA-112004187-1'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}