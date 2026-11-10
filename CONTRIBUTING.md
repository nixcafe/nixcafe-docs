# Contributing

Changes go through a feature branch and a pull request against `main`.

## Workflow

1. Fork the repo and clone your fork.
2. Create a branch from `main`:

   ```bash
   git checkout -b docs/short-description
   ```

   Common prefixes are `feat/`, `fix/`, `docs/`, and `chore/`.

3. Make your changes. Keep commits small and focused.
4. Push the branch and open a pull request against `main`.
5. Wait for review and for the PR check to pass.

## Before Submitting

Run the full check:

```bash
bun ci:check
```

This runs `biome ci .`, `bun typecheck`, and `bun test`.

You can also run the steps separately:

```bash
bun fmt          # format files with Biome
bun lint         # lint files with Biome
bun check        # check formatting and lint without writing
bun typecheck    # run tsc --noEmit in every workspace
bun test         # run tests
```

Install dependencies with `bun install`. The repo uses Bun workspaces, so
dependencies are installed once at the root. You can enter the Nix dev shell with
`nix develop`, or use `direnv allow` if you have direnv set up.

## Documentation Changes

- Site content lives in `apps/<site>/src/pages/` as MDX files.
- Navigation and metadata live in the site's `vocs.config.ts`.
- Shared branding and defaults come from `packages/shared-theme/`.
- To preview one site, run `bun run --filter <workspace> dev`. Workspace names are
  `landing`, `purr-docs`, `develop-templates-docs`, and `cattery-modules-docs`.

If you add or rename a page, update the sidebar in `vocs.config.ts` in the same
change. Dead links are reported as warnings by `checkDeadlinks: 'warn'`.

## Commit Style

Keep commits atomic. Use present tense and lowercase:

```
feat: add purr module guide
fix: correct sidebar link for installation
docs: update README with dev instructions
```
