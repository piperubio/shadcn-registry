# Piperubio Component Registry

Registro de componentes custom de shadcn/ui, alojado como sitio Astro para demos y distribución.

*[Read in English](README.md)*

## Stack

- Framework host: Astro
- Componentes: React + Tailwind CSS
- Testing: Vitest + Testing Library
- Tipos: TypeScript (strict)

## Inicio rápido

```bash
git clone https://github.com/piperubio/shadcn-registry.git
cd shadcn-registry
pnpm install
pnpm run dev
```

Abre `http://localhost:4321`.

## Uso del registry

Instala desde la URL de tu registry:

```bash
npx shadcn@latest add description --registry-url https://registry.piperubio.dev
```

Los assets del registry se sirven desde:

- `/r/registry.json`
- `/r/<componente>.json` (ejemplo: `/r/description.json`)

Segregación por framework:

- Componentes React (`*.tsx`): `registry/ui/react/`
- Componentes Astro (`*.astro`): `registry/ui/astro/`

## Estructura del proyecto

```txt
shadcn-registry/
├── registry/
│   └── ui/
│       ├── react/          # Componentes React del registry (*.tsx)
│       └── astro/          # Componentes Astro del registry (*.astro)
├── public/
│   └── r/                  # Endpoints públicos del registry
│       ├── registry.json
│       ├── description.json
│       └── registry/ui/
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
