// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VictusCode App',
  tagline: 'Open Sours Code Generator And Architecture',
  favicon: 'img/logo.svg',
  url: 'https://create-victus-app.vercel.app',
  baseUrl: '/',
  organizationName: 'VictusCode',
  projectName: 'CreateVictusApp',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      uk: {
        label: 'Українська',
        htmlLang: 'uk',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/VictusCode/CreateVictusApp/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/VictusCode/CreateVictusApp/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/global/custom.css'),
        },
      },
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      image: 'img/screenshot-design.png',
      navbar: {
        title: 'VictusCode',
        logo: {
          alt: 'VictusCode Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Quick Start',
            href: '/docs/quickStart',
            position: 'left',
          },
          {
            label: 'Frontend Architecture',
            href: '/docs/architecture/frontend/overview',
            position: 'left',
          },
          {
            href: 'https://github.com/VictusCode/CreateVictusApp',
            label: 'GitHub',
            position: 'right',
          },
          {
            position: 'right',
            type: 'localeDropdown',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Templates',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quickStart',
              },
            ],
          },
          {
            title: 'Architecture',
            items: [
              {
                label: 'Frontend',
                to: '/docs/architecture/frontend/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributing',
                to: '/docs/community/contributing',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/VictusCode/CreateVictusApp',
              },
              {
                label: 'License',
                href: 'https://github.com/VictusCode/CreateVictusApp/blob/master/LICENSE',
              },
            ],
          },
        ],
        copyright: `VictusCode App - Code Generator & Architecture.<br/> Licensed under MIT. Copyright © ${new Date().getFullYear()} VictusCode. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ['bash', 'diff', 'json', 'systemd', 'docker', 'toml', 'hcl', 'yaml'],
      },
    },
};

module.exports = config;
