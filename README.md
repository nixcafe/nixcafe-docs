<h1 align="center">nixcafe-docs</h1>
<p align="center">
  Documentation monorepo for <a href="https://nixcafe.org"><strong>nixcafe.org</strong></a> — built with Vocs, powered by Bun.
</p>

---

## Sites

| Site | URL | Source | Coverage |
|---|---|---|---|
| **landing** | [nixcafe.org](https://nixcafe.org) | `apps/landing/` | Project hub & landing page |
| **purr** | [purr.nixcafe.org](https://purr.nixcafe.org) | `apps/purr-docs/` | 7 pages — quick start, flake-parts, mkFlake, modules, systems/homes, directory structure, 32-function API reference |
| **develop-templates** | [templates.nixcafe.org](https://templates.nixcafe.org) | `apps/develop-templates/` | 4 pages — quick start, 13 templates catalog, architecture, contributing |
| **cattery** | [cattery.nixcafe.org](https://cattery.nixcafe.org) | `apps/cattery-modules/` | 6 pages — quick start, room hierarchy, 244+ module catalog, agenix secrets, contributing |

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
├── shells/default/           # Nix dev shell (bun, biome, git-hooks)
└── checks/git-hooks/         # pre-commit (biome, typecheck, test)

flake.nix                     # Nix flake using purr/mkFlake
package.json                  # Bun workspace root
```

## Development

```bash
nix develop                    # enter dev shell (or direnv allow)

bun install                    # install deps
bun dev                        # start all doc sites
bun run --filter <name> dev   # start a specific site
bun --filter '*' build         # build all sites
```

## Commands

```bash
bun fmt          # format all files (biome)
bun lint         # lint all files (biome)
bun check        # format + lint (read-only)
bun typecheck    # TypeScript type checking
bun test         # run tests
bun ci:check     # full PR pipeline (biome ci + typecheck + test)
```

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vocs](https://vocs.dev) | Static documentation (React + MDX) |
| [Bun](https://bun.com) | Package manager & workspace orchestration |
| [Biome](https://biomejs.dev) | Formatter & linter |
| [TypeScript](https://www.typescriptlang.org) | Type checking |
| [purr](https://purr.nixcafe.org) | Nix flake auto-discovery |
| [git-hooks.nix](https://github.com/cachix/git-hooks.nix) | pre-commit hooks |

## License

CC0 1.0 Universal
