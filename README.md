# nixcafe-docs

Documentation monorepo for [nixcafe](https://nixcafe.org) — Nix scaffolding tools and frameworks.

## Structure

```
├── apps/
│   ├── landing/       # nixcafe.org — landing page & project hub
│   └── purr-docs/     # docs.nixcafe.org/purr — purr framework docs
├── packages/
│   └── shared-theme/  # shared Vocs theme config
├── develop/
│   ├── shells/        # Nix dev shell
│   └── checks/        # Pre-commit hooks
├── flake.nix          # Nix flake entry (uses purr/mkFlake)
└── package.json       # Bun workspace root
```

## Prerequisites

- [Nix](https://nixos.org/download) with flakes enabled
- [direnv](https://direnv.net/) (optional, for auto-loading dev shell)

## Development

```bash
# Enter dev shell (with Node.js, Bun, ni, and more)
nix develop
# or with direnv:
direnv allow

# Install dependencies
bun install

# Start all doc sites in dev mode
bun dev

# Or run a specific site
bun run --filter landing dev
bun run --filter purr-docs dev
```

## Build

```bash
bun build
```

## Tech Stack

- [Vocs](https://vocs.dev) — Static documentation generator
- [Bun](https://bun.com) — Package manager & workspace orchestration
- [purr](https://github.com/nixcafe/purr) — Nix flake framework
- [git-hooks.nix](https://github.com/cachix/git-hooks.nix) — Pre-commit hooks
