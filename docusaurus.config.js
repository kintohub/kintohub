module.exports = {
  title: "KintoHub Documentation",
  tagline:
    "Follow our examples and guides to deploy your full stack app in no time.",
  url: "https://docs.kintohub.com",
  baseUrl: "/",
  organizationName: "kintohub",
  projectName: "kintohub",
  favicon: "img/favicon.ico",
  themeConfig: {
    disableDarkMode: false,
    image: "img/kintohub-og.png",
    prism: {
      theme: require("./src/js/monokaiTheme.js"),
    },
    navbar: {
      title: "KintoHub Docs",
      image: "img/redux-logo-landscape.png",
      logo: {
        alt: "Kinto Logo",
        src: "img/kinto.svg",
      },
      links: [
        {
          label: "Getting Started",
          to: "getting-started/introduction",
          position: "right",
        },
        {
          label: "Anatomy",
          to: "anatomy/environment",
          position: "right",
        },
        {
          label: "Examples",
          to: "examples/nodejs/nodejs-example",
          position: "right",
        },
        //{ label: 'FAQ', to: 'getting-started/faq', position: 'right' },
        {
          label: "Need help?",
          to: "https://www.kintohub.com/contact-us",
          position: "right",
        },
        {
          label: "Login",
          to: "https://kintohub.com/login",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "KintoHub",
          items: [
            {
              label: "Create Account",
              to: "https://kintohub.com/sign-up",
            },
            {
              label: "Pricing",
              to: "https://www.kintohub.com/pricing",
            },
            {
              label: "FAQ",
              to: "getting-started/faq",
            },
            {
              label: "Contact Us",
              to: "https://www.kintohub.com/contact-us",
            },
            {
              label: "Status",
              to: "https://kintohub.statuspage.io/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord Community",
              href: "https://discordapp.com/invite/E2CMjKP",
            },
            {
              label: "Roadmap",
              href: "https://feedback.kintohub.com/",
            },
            {
              label: "Request Features",
              href: "https://feedback.kintohub.com/feature-requests",
            },
            {
              label: "Report a Bug",
              href: "https://feedback.kintohub.com/bugs",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/kintohub/",
            },
            {
              label: "Twitter",
              href: "http://twitter.com/kintohub",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/KintoHub/",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCpJJc0zcfzdHPw64BSP3GyQ",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/kintohub/",
            },
          ],
        },
      ],
      logo: {
        alt: "KintoHub Logo",
        src: "img/kinto.svg",
        href: "https://kintohub.com/",
      },
      copyright: `Copyright © 2017-${new Date().getFullYear()} KintoHub Inc.`,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX,
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: "UA-112004187-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
