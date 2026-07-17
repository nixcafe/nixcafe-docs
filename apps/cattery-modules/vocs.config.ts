import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'cattery',
    baseUrl: 'https://cattery.nixcafe.org',
  }),
  description: 'cattery — quick-start NixOS configurations with room-based module bundles',
  renderStrategy: 'full-static',
  checkDeadlinks: 'warn',
  head: () => ({
    meta: {
      ogType: 'website',
      ogSiteName: 'nixcafe',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
      author: 'nixcafe',
      themeColor: '#0d0d0d',
    },
    link: [
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: 'https://cattery.nixcafe.org/sitemap.xml',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        textContent: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareSourceCode',
              name: 'cattery',
              description:
                'Quick-start NixOS configurations — choose a room, get a complete system',
              url: 'https://cattery.nixcafe.org',
              codeRepository: 'https://github.com/nixcafe/cattery-modules',
              programmingLanguage: 'Nix',
              applicationCategory: 'DeveloperApplication',
              license: 'CC0-1.0',
            },
            {
              '@type': 'WebSite',
              name: 'cattery',
              url: 'https://cattery.nixcafe.org',
              description: 'cattery — NixOS quick-start module documentation',
            },
          ],
        },
      },
    ],
  }),
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Quick Start', link: '/quick-start' },
        { text: 'Rooms', link: '/rooms' },
        { text: 'Modules', link: '/modules' },
      ],
    },
  ],
  editLink: {
    link: 'https://github.com/nixcafe/nixcafe-docs/edit/main/apps/cattery-modules/src/pages/:path',
  },
})
