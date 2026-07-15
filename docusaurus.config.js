// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SandboxCode',
  tagline: 'Kỹ sư phần mềm AI - AI Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nguyenvanhoaithuong0507-hub.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SandboxCode/',

  // GitHub pages deployment config.
  organizationName: 'nguyenvanhoaithuong0507-hub',
  projectName: 'SandboxCode',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({}),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SandboxCode',
        logo: {
          alt: 'SandboxCode Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tài liệu',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Bắt đầu',
                to: '/docs/intro',
              },
              {
                label: 'Hướng dẫn',
                to: '/docs/guides/installation',
              },
            ],
          },
          {
            title: 'Cộng đồng',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/issues',
              },
            ],
          },
          {
            title: 'Khác',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SandboxCode. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;