import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'purr',
    baseUrl: 'https://purr.nixcafe.org',
  }),
  description: 'purr - Nix flake framework with automatic discovery and module system',
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
      { rel: 'sitemap', type: 'application/xml', href: 'https://purr.nixcafe.org/sitemap.xml' },
    ],
    script: [
      {
        type: 'application/ld+json',
        textContent: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareSourceCode',
              name: 'purr',
              description: 'Nix flake framework with automatic discovery and module system',
              url: 'https://purr.nixcafe.org',
              codeRepository: 'https://github.com/nixcafe/purr',
              programmingLanguage: 'Nix',
              applicationCategory: 'DeveloperApplication',
              license: 'CC0-1.0',
            },
            {
              '@type': 'WebSite',
              name: 'purr',
              url: 'https://purr.nixcafe.org',
              description: 'purr - Nix flake framework documentation',
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
        { text: 'flake-parts Integration', link: '/flake-parts' },
        { text: 'mkFlake Usage', link: '/mkflake' },
        { text: 'Module System', link: '/modules' },
      ],
    },
  ],
  editLink: {
    link: 'https://github.com/nixcafe/nixcafe-docs/edit/main/apps/purr-docs/src/pages/:path',
  },
})
