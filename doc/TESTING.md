# Testing Workflow

This project uses a hybrid testing workflow:

- `code-review-graph` first to scope the change and estimate blast radius
- `RTL + Vitest` for focused regression coverage on UI behavior

## Commands

- `npm run test` for watch mode
- `npm run test:run` for a one-shot run

## What gets RTL coverage

- `features/*` with user interaction
- `widgets/*` with loading, empty, error, or branching states
- `entities/*/ui` when business data affects rendering branches
- route-level pages only for smoke tests or route-specific behavior

## What does not need RTL by default

- static presentational markup
- placeholder scaffolds that will be replaced immediately
- trivial wrappers with no branching or interaction

## Change workflow

1. Use `code-review-graph` with minimal detail to find touched files and blast radius.
2. Implement the change.
3. Add or update RTL if the change affects user-visible behavior.
4. Re-run `detect_changes_tool` before merge for non-trivial refactors.
