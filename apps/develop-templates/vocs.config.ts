import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'develop-templates',
    baseUrl: 'https://templates.nixcafe.org',
  }),
  description: 'develop-templates - Nix flake templates for reproducible development environments',
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
        href: 'https://templates.nixcafe.org/sitemap.xml',
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
              name: 'develop-templates',
              description: 'Nix flake templates for reproducible development environments',
              url: 'https://templates.nixcafe.org',
              codeRepository: 'https://github.com/nixcafe/develop-templates',
              programmingLanguage: 'Nix',
              applicationCategory: 'DeveloperApplication',
              license: 'CC0-1.0',
            },
            {
              '@type': 'WebSite',
              name: 'develop-templates',
              url: 'https://templates.nixcafe.org',
              description: 'develop-templates - Nix flake templates documentation',
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
        { text: 'Available Templates', link: '/templates' },
        { text: 'Contributing', link: '/contributing' },
      ],
    },
  ],
  editLink: {
    link: 'https://github.com/nixcafe/nixcafe-docs/edit/main/apps/develop-templates/src/pages/:path',
  },
})
