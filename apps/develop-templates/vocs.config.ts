import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'develop-templates',
    baseUrl: 'https://templates.nixcafe.org',
  }),
  description: 'develop-templates — Nix flake templates for reproducible development environments',
  renderStrategy: 'full-static',
  checkDeadlinks: 'warn',
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
