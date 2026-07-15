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

- `defineNixcafeTheme(options)` — Returns a partial Vocs config with nixcafe branding
