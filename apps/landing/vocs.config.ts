import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'nixcafe',
    baseUrl: 'https://nixcafe.org',
  }),
  description: 'nixcafe — Nix scaffolding tools and frameworks for modern development',
  renderStrategy: 'full-static',
  checkDeadlinks: 'warn',
  sidebar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Projects',
      items: [{ text: 'purr', link: 'https://purr.nixcafe.org' }],
    },
    {
      text: 'Community',
      items: [{ text: 'GitHub', link: 'https://github.com/nixcafe' }],
    },
  ],
  editLink: {
    link: 'https://github.com/nixcafe/nixcafe-docs/edit/main/apps/landing/src/pages/:path',
  },
})
