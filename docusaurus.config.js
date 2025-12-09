// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI and Humanoid Robotics',
  tagline: 'Book for learning',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://humanoid-robotics-interactive-textb.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], // Added Urdu locale
     localeConfigs: {
    en: { label: 'English' },
    ur: { label: 'اردو' },
  },
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.jpg',
          srcDark: 'img/logo.jpg',
        },
        hideOnScroll: true,
        style: 'primary',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            to: '/features',
            label: 'Features',
            position: 'left',
          },

          {
            href: 'https://github.com/ar813/physical-ai-and-humanoid-robotics-course',
            label: 'GitHub',
            position: 'right',
            className: 'navbar-github-link',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            i18n: {
              defaultLocale: 'en',
              locales: ['en', 'ur'],
              localeConfigs: {
                ur: {
                  label: 'اردو',
                  direction: 'rtl',
                },
              },
            },
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Book',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Modules',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discords.com/servers/tags/robotics',
              },
              {
                label: 'Github',
                href: 'https://github.com/ar813/physical-ai-and-humanoid-robotics-course',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Research Papers',
                href: 'https://www.researchgate.net/publication/392709593_A_Systematic_Review_of_Physical_Artificial_Intelligence_Physical_AI_Concepts_Applications_Challenges_and_Future_Directions'
              },
              {
                label: 'AI & Robotics Tools',
                href: 'https://www.linkedin.com/pulse/robotics-developers-toolkit-ai-tools-every-engineer-should-bajaj-cccvc/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ar813/physical-ai-and-humanoid-robotics-coursei',
              },
            ],
          },
        ],
        copyright: `
    © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. 
    Designed for next-generation robotics engineers. Built with Docusaurus.
  `,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
