import { describe, expect, test } from 'bun:test'
import { defineNixcafeTheme } from './index.ts'

describe('defineNixcafeTheme', () => {
  test('returns a theme config with given title and baseUrl', () => {
    const theme = defineNixcafeTheme({
      title: 'nixcafe',
      baseUrl: 'https://nixcafe.org',
    })

    expect(theme.title).toBe('nixcafe')
    expect(theme.baseUrl).toBe('https://nixcafe.org')
    expect(theme.colorScheme).toBe('dark')
    expect(theme.accentColor).toBe('#4fc3f7')
  })

  test('logoUrl has light and dark variants', () => {
    const theme = defineNixcafeTheme({
      title: 'test',
      baseUrl: 'https://test.org',
    })

    expect(theme.logoUrl).toEqual({ light: '/logo.svg', dark: '/logo-dark.svg' })
    expect(theme.iconUrl).toEqual({
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    })
  })

  test('includes GitHub social link', () => {
    const theme = defineNixcafeTheme({
      title: 'test',
      baseUrl: 'https://test.org',
    })

    expect(theme.socials).toEqual([{ icon: 'github', link: 'https://github.com/nixcafe' }])
  })
})
