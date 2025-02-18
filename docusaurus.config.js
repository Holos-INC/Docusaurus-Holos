// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Holos',
  tagline: 'Grupo 1 ISPP 24-25',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        hashed: true,
        translations: {
          search_placeholder: "Buscar...",
          no_results: "No se encontraron resultados.",
        },
      },
    ],
  ],  
  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Holos',
      logo: {
        alt: 'Holos Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Feedback',
          position: 'left',
          items: [
            { label: 'Introducción', to: 'docs/Feedback/intro-feedback' },
            { label: 'Otros grupos', to: 'docs/Feedback/Otros Grupos' },
          ],
        },
        {
          label: 'Actas',
          position: 'left',
          to: 'docs/Actas/intro-actas',
        },
        {
          label: 'Documentación',
          position: 'left',
          to: 'docs/Documentacion/intro',
        },
        {
          label: 'Entregas Anteriores',
          position: 'left',
          items: [
            { label: 'Introducción', to: 'docs/Entregables/intro-entregables-anteriores' },
            { label: 'Histórico', to: 'docs/Entregables/historico' },
          ],
        },
        {
          href: 'https://github.com/Holos-INC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '¿Quienes somos?',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Contacto',
              href: 'mailto:GiBart.soporte@gmail.com',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/gibart_official/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Holos-INC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Holos, S.A. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
