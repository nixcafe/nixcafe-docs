interface ThemeOptions {
  title: string
  baseUrl: string
}

export function defineNixcafeTheme({ title, baseUrl }: ThemeOptions) {
  return {
    title,
    baseUrl,
    accentColor: '#4fc3f7',
    colorScheme: 'dark' as const,
    logoUrl: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    iconUrl: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    socials: [{ icon: 'github' as const, link: 'https://github.com/nixcafe' }],
    head: () => ({
      meta: {
        ogType: 'website',
        ogSiteName: 'nixcafe',
        twitterCard: 'summary_large_image',
        twitterSite: '@nixcafe',
        author: 'nixcafe',
        robots: 'index, follow',
        referrer: 'origin-when-cross-origin',
        themeColor: '#0d0d0d',
      },
      link: [{ rel: 'sitemap', type: 'application/xml', href: `${baseUrl}/sitemap.xml` }],
    }),
  }
}
