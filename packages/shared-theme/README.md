# shared-theme

Shared Vocs theme configuration for nixcafe documentation sites.

## Usage

```ts
import { defineNixcafeTheme } from 'shared-theme'

export default defineConfig({
  ...defineNixcafeTheme({
    title: 'My Docs',
    baseUrl: 'https://docs.nixcafe.org/my-project',
  }),
  // site-specific config...
})
```

## Exports

- `defineNixcafeTheme(options)`: returns a partial Vocs config with nixcafe branding.
  It sets the accent color, dark color scheme, logo and icon paths, GitHub social
  link, and default metadata.

Options:

- `title`: site title.
- `baseUrl`: deployed base URL, used for the sitemap link.
