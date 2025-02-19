// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Holos',
  tagline: 'Grupo 1 ISPP 24-25',
  favicon: 'img/favicon.ico',
  url: 'https://holos-doc.vercel.app',
  baseUrl: '/',
  organizationName: 'Holos-INC',
  projectName: 'holos-doc',
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
          editUrl: 'https://github.com/Holos-INC/docusaurus/tree/main/docs/',
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
    image: 'img/social-preview.png',
    metadata: [
      { name: 'description', content: 'Documentación oficial del Grupo 1 ISPP 24-25 en Holos.' },
      { name: 'keywords', content: 'holos, documentación, grupo 1, ISPP' },
      { property: 'og:title', content: 'Holos - Documentación Oficial' },
      { property: 'og:description', content: 'Documentación oficial del Grupo 1 ISPP 24-25 en Holos.' },
      { property: 'og:image', content: 'https://holos-doc.vercel.app/img/social-preview.png' },
      { property: 'og:url', content: 'https://holos-doc.vercel.app' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Holos - Documentación Oficial' },
      { property: 'twitter:description', content: 'Documentación oficial del Grupo 1 ISPP 24-25 en Holos.' },
      { property: 'twitter:image', content: 'https://holos-doc.vercel.app/img/social-preview.png' }
    ],
    navbar: {
      title: 'Holos',
      logo: {
        alt: 'Holos Logo',
        src: 'img/logo.png', // Logo para modo claro
        srcDark: 'img/logodark.png', // Logo para modo oscuro
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
              label: '¿Quiénes somos?',
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
