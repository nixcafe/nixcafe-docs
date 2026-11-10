<h1 align="center">nixcafe-docs</h1>
<p align="center">
  Documentation monorepo for <a href="https://nixcafe.org"><strong>nixcafe.org</strong></a>, built with Vocs and Bun.
</p>

---

## Sites

| Site | URL | Source | Content |
|---|---|---|---|
| **landing** | [nixcafe.org](https://nixcafe.org) | `apps/landing/` | Project hub |
| **purr** | [purr.nixcafe.org](https://purr.nixcafe.org) | `apps/purr-docs/` | 9 pages: quick start, flake-parts, mkFlake, modules, directory structure, systems and homes, host meta, hydraJobs, and an API reference for the exported functions |
| **develop-templates** | [templates.nixcafe.org](https://templates.nixcafe.org) | `apps/develop-templates/` | 4 pages: quick start, catalog of 13 templates, and contributing |
| **cattery** | [cattery.nixcafe.org](https://cattery.nixcafe.org) | `apps/cattery-modules/` | 6 pages: quick start, rooms, module catalog, secrets with agenix, and contributing |

## Structure

```
apps/
├── landing/                  # nixcafe.org
├── purr-docs/                # purr.nixcafe.org
├── develop-templates/        # templates.nixcafe.org
└── cattery-modules/          # cattery.nixcafe.org

packages/
└── shared-theme/             # shared Vocs theme (defineNixcafeTheme)

develop/
├── shells/default/           # Nix dev shell with Bun and pre-commit hooks
└── checks/git-hooks/         # pre-commit hook (biome)

flake.nix                     # Nix flake using purr/mkFlake
package.json                  # Bun workspace root
```

Each site has an entry in `package.json` under `workspaces`. The workspace names are
`landing`, `purr-docs`, `develop-templates-docs`, and `cattery-modules-docs`.

## Development

```bash
nix develop                    # enter the dev shell (or run direnv allow)

bun install                    # install dependencies
bun dev                        # start all sites
bun run --filter <workspace> dev   # start one site, for example landing
bun run build                  # build all sites
```

## Commands

```bash
bun fmt          # format all files with Biome
bun lint         # lint all files with Biome
bun check        # check formatting and lint without writing
bun typecheck    # run tsc --noEmit in every workspace
bun test         # run tests
bun ci:check     # run the PR pipeline: biome ci, typecheck, and test
```

The pre-commit hook runs `biome ci .`, `bun typecheck`, and `bun test` when the
corresponding files change. See `develop/shells/default/default.nix`.

## Deployment

Each site deploys from `main` through GitHub Actions:

| Workflow | Site | Published to |
|---|---|---|
| `deploy.yml` | landing | GitHub Pages for `nixcafe.org` |
| `deploy-purr-docs.yml` | purr | `nixcafe/purr` GitHub Pages |
| `deploy-develop-templates.yml` | develop-templates | `nixcafe/develop-templates` GitHub Pages |
| `deploy-cattery-modules.yml` | cattery | `nixcafe/cattery-modules` GitHub Pages |

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vocs](https://vocs.dev) | Static documentation generator (React and MDX) |
| [Bun](https://bun.com) | Package manager and workspace scripts |
| [Biome](https://biomejs.dev) | Formatter and linter |
| [TypeScript](https://www.typescriptlang.org) | Type checking |
| [purr](https://purr.nixcafe.org) | Nix flake auto-discovery |
| [git-hooks.nix](https://github.com/cachix/git-hooks.nix) | Pre-commit hooks |

## License

CC0 1.0 Universal
