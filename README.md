# 🎨 Piperubio Component Registry

A custom shadcn/ui component registry created and maintained by **piperubio**. This project provides reusable, well-documented, and fully typed React components based on the shadcn/ui ecosystem.

*[🇪🇸 Leer en español](README.es.md)*

## ✨ Features

- 🎯 **Optimized components**: Based on shadcn/ui with custom enhancements and variants
- 📱 **Responsive**: Mobile-first design with full support for different screen sizes
- 🎨 **Theming**: Complete dark mode support and theme customization
- 📊 **TypeScript**: Full typing for better development experience
- 🧪 **Testing**: Complete test suite with Vitest and Testing Library
- 📚 **Documentation**: Interactive documentation with live examples

## 🚀 Quick start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/piperubio/shadcn-registry.git
   cd shadcn-registry
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Using as a registry

To use this registry with the shadcn/ui CLI:

```bash
npx shadcn@latest add --registry-url https://registry.piperubio.dev
```

### Manual component installation

If you prefer to copy and paste components:

1. Copy the component code from the documentation
2. Ensure you have the required dependencies installed
3. Paste the code into your project

## 📦 Available components

### Description Component
A flexible component for displaying structured information with two distinctive variants.

**Features:**
- ✅ Two variants: `basic` and `bordered`
- ✅ Support for 1-3 responsive columns
- ✅ Customizable column spanning
- ✅ ReactNode values for rich content
- ✅ Grouped sections

**Installation:**
```bash
npx shadcn@latest add description --registry-url https://registry.piperubio.dev
```

**Basic usage:**
```tsx
import { Description, DescriptionItem } from "@/components/description/description";

<Description title="User Profile" columns={3} variant="basic">
  <DescriptionItem label="Name" value="John Doe" />
  <DescriptionItem label="Email" value="john@example.com" />
  <DescriptionItem label="Role" value={<Badge>Admin</Badge>} />
</Description>
```

## 🛠️ Development

### Project structure

```
shadcn-registry/
├── app/                    # Next.js application
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Documentation page
├── components/            # Registry components
│   ├── description/       # Description component
│   │   ├── __tests__/     # Component tests
│   │   └── description.tsx
│   └── ui/                # Base shadcn UI components
├── lib/                   # Utilities
│   └── utils.ts          # cn() function and utilities
├── registry/             # Registry metadata (coming soon)
└── src/test/             # Test configuration
```

### Available scripts

```bash
# Development
pnpm run dev          # Development server

# Build
pnpm run build        # Production build
pnpm run start        # Production server

# Testing
pnpm test             # Run tests in watch mode
pnpm run test:run     # Run tests once
pnpm run test:ui      # Open test interface

# Linting
pnpm run lint         # Run ESLint
```

### Running tests

```bash
# All tests
pnpm test

# Specific test
pnpm test -- components/description/__tests__/description.test.tsx

# Tests with UI
pnpm run test:ui
```

## 🏗️ Architecture

### Tech stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with CSS Variables
- **UI Components**: Radix UI primitives
- **Testing**: Vitest + Testing Library
- **TypeScript**: Strict configuration
- **Build**: Optimized Next.js build

### Design patterns

- **Functional components** with React hooks
- **Context API** for shared configuration
- **Class Variance Authority (cva)** for component variants
- **Path aliases** (@/) for clean imports
- **CSS Variables** for consistent theming

## 🎨 Customization

### Themes

The registry supports complete theme customization through CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

### Configuration

Project configuration is found in `components.json`:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 🤝 Contributing

### Contribution process

1. **Fork** the repository
2. **Create** a branch for your feature (`git checkout -b feature/new-functionality`)
3. **Commit** your changes (`git commit -m 'Add new functionality'`)
4. **Push** to the branch (`git push origin feature/new-functionality`)
5. **Open** a Pull Request

### Guidelines

- ✅ Use TypeScript with strict typing
- ✅ Follow project naming conventions
- ✅ Add tests for new components
- ✅ Document props with JSDoc
- ✅ Ensure tests pass (`pnpm test`)
- ✅ Run linting (`pnpm run lint`)

### Adding a new component

1. **Create** the component structure:
   ```
   components/my-component/
   ├── __tests__/
   │   └── my-component.test.tsx
   └── my-component.tsx
   ```

2. **Implement** the component with:
   - TypeScript typed props
   - Variants using `cva`
   - Comprehensive tests
   - JSDoc documentation

3. **Add** examples to the documentation

## 📋 Registry API

### Available endpoints

```
GET /api/registry
├── Lists all available components
├── Response: Array<ComponentInfo>

GET /api/registry/[name]
├── Gets detailed information about a component
├── Response: ComponentDetail

GET /api/registry/[name]/code
├── Gets the component source code
├── Response: { files: ComponentFile[] }
```

### Example response

```json
{
  "name": "description",
  "displayName": "Description",
  "description": "Flexible component for displaying structured information",
  "version": "1.0.0",
  "dependencies": ["@radix-ui/react-slot", "class-variance-authority"],
  "files": [
    {
      "name": "description.tsx",
      "path": "components/description/description.tsx",
      "type": "component"
    }
  ],
  "examples": [...]
}
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 👤 Author

**piperubio**
- GitHub: [@piperubio](https://github.com/piperubio)
- Website: [piperubio.dev](https://piperubio.dev)

## 🙏 Acknowledgments

- [shadcn](https://github.com/shadcn) for creating the amazing shadcn/ui system
- [Radix UI](https://radix-ui.com) for accessible primitives
- The React community for tools and libraries

---

**Need help?** Open an [issue](https://github.com/piperubio/shadcn-registry/issues) or check the [documentation](https://registry.piperubio.dev).