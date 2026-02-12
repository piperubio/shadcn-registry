# Agent Development Guidelines

Keep rules short. Agents should follow these minimal guidelines when working in this repo.

Package manager
- Use `pnpm` for all package management and scripts.

Common commands
- `pnpm run dev` — start dev server
- `pnpm run build` — build site
- `pnpm run lint` — run checks
- `pnpm test` — Vitest (watch)
- `pnpm run test:run` — Vitest (single run)
- Single test: `pnpm test -- path/to/file.test.tsx`

Style highlights
- TypeScript (strict). Prefer explicit types; avoid `any`.
- React components: functional + hooks; add `"use client"` for client components.
- Export prop interfaces `XxxProps`; destructure with defaults.
- Import order: `react`, type-only, `@/` (internal), third-party, styles/assets.
- Styling: Tailwind + `cn()`/`clsx`; use `cva` for variants.

Tests & tooling
- Vitest + Testing Library, `jsdom` env; global setup in `src/test/setup.ts`.

Safety & git
- Do not start long-running processes unless requested.
- Do not create commits unless requested; follow non-destructive git rules.

Production URL
- `https://piperubio-shadcn-registry.vercel.app`

If unsure, follow nearby examples in `registry/ui/react/components` or `src/components`.
