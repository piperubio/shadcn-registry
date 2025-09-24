# Agent Development Guidelines

## Package Manager
- **Use pnpm instead of npm** for all package management and script execution
- This project uses pnpm as the preferred package manager

## Build/Test Commands
- **Build**: `pnpm run build` (Next.js build)
- **Dev**: `pnpm run dev` (development server)
- **Lint**: `pnpm run lint` (Next.js ESLint)
- **Tests**: `pnpm test` (Vitest), `pnpm run test:run` (single run), `pnpm run test:ui` (UI mode)
- **Single test**: `pnpm test -- components/description/__tests__/description.test.tsx`

## Code Style
- Use TypeScript with strict types, explicit interfaces for props
- React functional components with hooks, use `"use client"` for client components
- Import order: React imports, type imports, internal components (`@/`), then external
- Use `cn()` from `@/lib/utils` for className merging, cva for variant classes
- Props destructuring with defaults: `{ className = "", variant = "default" }`
- Interface names end with `Props` for component props
- Use JSDoc comments for complex functions/props when needed

## Patterns
- Radix UI + shadcn/ui components, Tailwind CSS for styling
- Context for passing shared state (e.g., DescriptionContext)
- Class variance authority (cva) for component variants
- Vitest + Testing Library for tests with proper describe/it structure
- Path alias `@/` for root-level imports

## Instructions

- NOT RUN TESTS WITHOUT USER REQUEST
- NOT RUN DEV SERVER WITHOUT USER REQUEST