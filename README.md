# nixcafe-docs

Documentation monorepo for [nixcafe](https://nixcafe.org).

## Structure

```
├── apps/
│   ├── landing/              # nixcafe.org — landing page & project hub
│   ├── purr-docs/             # purr.nixcafe.org — purr framework docs
│   └── develop-templates/     # templates.nixcafe.org — flake templates docs
├── packages/
│   └── shared-theme/          # shared Vocs theme config
├── develop/
│   ├── shells/                # Nix dev shell
│   └── checks/                # pre-commit hooks
├── flake.nix                  # Nix flake (uses purr/mkFlake)
└── package.json               # Bun workspace root
```

## Development

```bash
nix develop        # enter dev shell (or direnv allow)

bun install        # install deps
bun dev            # start all doc sites
bun run --filter <name> dev  # start a specific site
```

## Commands

```bash
bun fmt            # format all files
bun lint           # lint all files
bun check          # format + lint (read-only)
bun typecheck      # TypeScript type checking
bun test           # run tests
bun ci:check       # full PR pipeline
bun run build      # build all sites
```

## Tech Stack

- [Vocs](https://vocs.dev) — static documentation generator
- [Bun](https://bun.com) — package manager & workspace orchestration
- [Biome](https://biomejs.dev) — formatter & linter
- [TypeScript](https://www.typescriptlang.org) — type checking
- [purr](https://github.com/nixcafe/purr) — Nix flake framework
- [git-hooks.nix](https://github.com/cachix/git-hooks.nix) — pre-commit hooks
