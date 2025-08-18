# Agent Development Guidelines

## Build/Test Commands
- **Build**: `npm run build` (Next.js build)
- **Dev**: `npm run dev` (development server)
- **Lint**: `npm run lint` (Next.js ESLint)
- **Tests**: `npm test` (Vitest), `npm run test:run` (single run), `npm run test:ui` (UI mode)
- **Single test**: `npm test -- components/description/__tests__/description.test.tsx`

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