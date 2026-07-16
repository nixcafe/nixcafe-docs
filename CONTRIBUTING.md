# Contributing

Follow **GitHub Flow** — all contributions go through feature branches and pull requests.

## Workflow

1. **Fork & clone** the repo
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feat/short-description
   ```
   Prefixes: `feat/`, `fix/`, `docs/`, `chore/`
3. **Make changes** — keep commits small and focused
4. **Push** your branch and **open a PR** against `main`
5. Wait for review and CI to pass

## Before Submitting

- Run `bun ci:check` to run the full pipeline (biome + typecheck + test)
- Or run individually:
  - `bun fmt` — format all files
  - `bun lint` — lint all files
  - `bun check` — format + lint
  - `bun typecheck` — verify TypeScript types
  - `bun test` — run tests

## Commit Style

Keep commits atomic. Use present tense, lowercase:

```
feat: add purr module guide
fix: correct sidebar link for installation
docs: update README with dev instructions
```
