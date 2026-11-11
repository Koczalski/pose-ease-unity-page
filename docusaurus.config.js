import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'pose-ease-unity',
  tagline: 'Unity で VRChat アバターのポーズを作り、負荷を確かめる拡張',
  favicon: 'img/favicon.ico',

  // GitHub Pages (project site): https://koczalski.github.io/pose-ease-unity-page/
  url: 'https://koczalski.github.io',
  baseUrl: '/pose-ease-unity-page/',
  organizationName: 'Koczalski',
  projectName: 'pose-ease-unity-page',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'pose-ease-unity',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'ドキュメント',
        },
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://github.com/Koczalski/pose-ease-unity-page',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: '画像のアバター: ナユ 3D モデル（有坂みと）。pose-ease-unity のドキュメント。Unity は Unity Technologies の商標です。VRChat は VRChat Inc. の商標です。',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
