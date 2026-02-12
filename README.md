# Piperubio Component Registry

Registry of custom shadcn/ui components, hosted as an Astro site for demos and distribution.

*[Read in Spanish](README.es.md)*

## Stack

- Host framework: Astro
- Components: React + Tailwind CSS
- Testing: Vitest + Testing Library
- Types: TypeScript (strict)

## Quick start

```bash
git clone https://github.com/piperubio/shadcn-registry.git
cd shadcn-registry
pnpm install
pnpm run dev
```

Open `http://localhost:4321`.

## Registry usage

Install from your registry URL:

```bash
npx shadcn@latest add description --registry-url https://registry.piperubio.dev
```

Registry assets are served from:

- `/registry.json`
- `/registry/*`

## Project structure

```txt
shadcn-registry/
├── registry/
│   └── ui/
│       ├── components/
│       └── lib/
├── public/
│   ├── registry.json
│   └── registry/
│       └── ui/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── test/
└── components.json
```

## Scripts

```bash
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
pnpm test
pnpm run test:run
pnpm run test:ui
```
