import { defineConfig } from 'vocs/config'
import { defineNixcafeTheme } from 'shared-theme'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'purr',
    baseUrl: 'https://purr.nixcafe.org',
  }),
  description: 'purr — Nix flake framework with automatic discovery and module system',
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
