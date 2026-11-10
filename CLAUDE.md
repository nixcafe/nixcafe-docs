# nixcafe-docs

Documentation monorepo for nixcafe.org. It contains four Vocs sites and a shared
theme package, all managed with Bun workspaces.

## Bun conventions

Use Bun instead of Node.js tooling:

- `bun install` instead of `npm install`, `yarn install`, or `pnpm install`
- `bun run <script>` instead of `npm run <script>`
- `bunx <package> <command>` instead of `npx`
- `bun test` instead of Jest or Vitest
- `bun <file>` instead of `node <file>` or `ts-node <file>`

Bun loads `.env` automatically, so do not add dotenv. Prefer Bun APIs when you write
new TypeScript, but most code in this repo is Vocs configuration and MDX content.

## Workspaces

Dependencies are installed once at the root.

| Workspace | Path | Purpose |
|---|---|---|
| `landing` | `apps/landing/` | nixcafe.org landing page |
| `purr-docs` | `apps/purr-docs/` | purr documentation |
| `develop-templates-docs` | `apps/develop-templates/` | develop-templates documentation |
| `cattery-modules-docs` | `apps/cattery-modules/` | cattery documentation |
| `shared-theme` | `packages/shared-theme/` | shared Vocs theme (`defineNixcafeTheme`) |

## Commands

| Command | Action |
|---|---|
| `bun dev` | Start all sites |
| `bun run --filter <workspace> dev` | Start one site |
| `bun run build` | Build all sites |
| `bun run --filter <workspace> build` | Build one site |
| `bun fmt` | Format all files with Biome |
| `bun lint` | Lint all files with Biome |
| `bun check` | Check formatting and lint without writing |
| `bun typecheck` | Run `tsc --noEmit` in every workspace |
| `bun test` | Run tests |
| `bun ci:check` | Run the PR pipeline: `biome ci`, typecheck, test |

Do not use `bun build` for the sites. That is Bun's bundler. Use `bun run build` to
run the Vocs build scripts.

## Repository layout

```text
apps/<site>/src/pages/*.mdx   Site pages
apps/<site>/vocs.config.ts    Site title, sidebar, metadata, edit link
apps/<site>/public/           Static files such as CNAME and logos
packages/shared-theme/        Shared theme options
develop/shells/default/       Nix dev shell and pre-commit hooks
develop/checks/git-hooks/     Standalone pre-commit check
flake.nix                     Flake using purr/mkFlake
```

`src/pages.gen.ts` and `dist/` are generated. Do not edit them.

## Adding a page

1. Add an `.mdx` file under `apps/<site>/src/pages/`.
2. Add frontmatter with `title` and `description`.
3. Add the page to the sidebar in that site's `vocs.config.ts`.

Use site-root links such as `/quick-start` for pages in the same site. External
project links point at the deployed sites.

## Adding a site

1. Create `apps/<name>/` with `package.json`, `vocs.config.ts`, and `tsconfig.json`.
2. Add `"shared-theme": "workspace:*"` to dependencies.
3. Spread `defineNixcafeTheme({ title, baseUrl })` into the Vocs config.
4. Add a deploy workflow if the site needs its own domain.

## Style

Biome formats TypeScript and JSON. The config uses single quotes, no semicolons,
trailing commas, two-space indentation, and a 100 character line width. Run
`bun fmt` for a full format, or format only the files you changed to keep the diff
focused.

For documentation, write direct prose and keep commands, paths, and option names
exact. Check claims about page counts, templates, and module counts against the
source before changing them.

## Contributing

Use a feature branch off `main` and open a pull request. Run `bun ci:check` before
submitting. See `CONTRIBUTING.md`.
