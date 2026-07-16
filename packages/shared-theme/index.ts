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
  }
}
