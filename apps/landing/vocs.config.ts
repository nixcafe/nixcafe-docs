import { defineNixcafeTheme } from 'shared-theme'
import { defineConfig } from 'vocs/config'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'nixcafe',
    baseUrl: 'https://nixcafe.org',
  }),
  accentColor: '#888888',
  description: 'nixcafe - Nix scaffolding tools and frameworks for modern development',
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
    link: [{ rel: 'sitemap', type: 'application/xml', href: 'https://nixcafe.org/sitemap.xml' }],
    script: [
      {
        type: 'application/ld+json',
        textContent: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'nixcafe',
              url: 'https://nixcafe.org',
              description: 'Nix scaffolding tools and frameworks for modern development',
              sameAs: ['https://github.com/nixcafe'],
            },
            {
              '@type': 'WebSite',
              name: 'nixcafe',
              url: 'https://nixcafe.org',
              description: 'Nix scaffolding tools and frameworks for modern development',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://purr.nixcafe.org/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            },
          ],
        },
      },
    ],
  }),
  sidebar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Projects',
      items: [
        { text: 'purr', link: 'https://purr.nixcafe.org' },
        { text: 'develop-templates', link: 'https://templates.nixcafe.org' },
      ],
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
