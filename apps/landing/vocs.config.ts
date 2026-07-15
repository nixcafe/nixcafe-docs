import { defineConfig } from 'vocs/config'
import { defineNixcafeTheme } from 'shared-theme'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'nixcafe',
    baseUrl: 'https://nixcafe.org',
  }),
  description: 'nixcafe — Nix scaffolding tools and frameworks for modern development',
  checkDeadlinks: 'warn',
  sidebar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Projects',
      items: [
        { text: 'purr', link: 'https://docs.nixcafe.org/purr' },
      ],
    },
    {
      text: 'Community',
      items: [
        { text: 'GitHub', link: 'https://github.com/nixcafe' },
      ],
    },
  ],
  editLink: {
    link: 'https://github.com/nixcafe/nixcafe-docs/edit/main/apps/landing/src/pages/:path',
  },
})
