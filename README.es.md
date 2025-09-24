# 🎨 Piperubio Component Registry

Un registro personalizado de componentes shadcn/ui creado y mantenido por **piperubio**. Este proyecto proporciona componentes React reutilizables, bien documentados y totalmente tipados, basados en el ecosistema shadcn/ui.

*[🇺🇸 Read in English](README.md)*

## ✨ Características

- 🎯 **Componentes optimizados**: Basados en shadcn/ui con mejoras y variantes personalizadas
- 📱 **Responsive**: Diseño mobile-first con soporte completo para diferentes tamaños de pantalla
- 🎨 **Theming**: Soporte completo para modo oscuro y personalización de temas
- 📊 **TypeScript**: Tipado completo para una mejor experiencia de desarrollo
- 🧪 **Testing**: Suite de tests completa con Vitest y Testing Library
- 📚 **Documentación**: Documentación interactiva con ejemplos en vivo

## 🚀 Inicio rápido

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/piperubio/shadcn-registry.git
   cd shadcn-registry
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

### Uso como registro

Para usar este registro con la CLI de shadcn/ui:

```bash
npx shadcn@latest add --registry-url https://registry.piperubio.dev
```

### Instalación manual de componentes

Si prefieres copiar y pegar los componentes:

1. Copia el código del componente desde la documentación
2. Asegúrate de tener las dependencias requeridas instaladas
3. Pega el código en tu proyecto

## 📦 Componentes disponibles

### Description Component
Un componente flexible para mostrar información estructurada con dos variantes distintivas.

**Características:**
- ✅ Dos variantes: `basic` y `bordered`
- ✅ Soporte para 1-3 columnas responsivas
- ✅ Spanning de columnas personalizable
- ✅ Valores ReactNode para contenido enriquecido
- ✅ Secciones agrupadas

**Instalación:**
```bash
npx shadcn@latest add description --registry-url https://registry.piperubio.dev
```

**Uso básico (objeto de columnas responsivas):**
```tsx
import { Description, DescriptionItem } from "@/components/description/description";

<Description
  title="User Profile"
  // 1 columna base, 2 desde md, 3 desde lg
  columns={{ base: 1, md: 2, lg: 3 }}
  variant="basic"
>
  <DescriptionItem label="Name" value="John Doe" />
  <DescriptionItem label="Email" value="john@example.com" />
  <DescriptionItem label="Role" value={<Badge>Admin</Badge>} />
</Description>
```

**Ejemplo variante bordered:**
```tsx
<Description
  title="Service Configuration"
  variant="bordered"
  columns={{ base: 1, md: 2, lg: 3 }}
>
  <DescriptionItem label="Service" value="Cloud DB" />
  <DescriptionItem label="Status" value={<span className="text-green-600">Active</span>} />
  <DescriptionItem label="Region" value="US-East" />
  <DescriptionItem label="Plan" value="Pro" span={2} />
  <DescriptionItem label="Notes" value="Descripción extendida" span={3} />
</Description>
```

**API de `columns`:**
```ts
columns?: {
  base?: 1 | 2 | 3; // default 1
  sm?: 1 | 2 | 3;
  md?: 1 | 2 | 3; // default 2
  lg?: 1 | 2 | 3; // default 3
  xl?: 1 | 2 | 3;
  "2xl"?: 1 | 2 | 3;
}
```

Si omites `columns` se usa `{ base:1, md:2, lg:3 }`.

**Spanning:**
`span` se limita automáticamente al máximo de columnas definidas. Ej: `span={3}` en un layout cuyo máximo es 2 → `col-span-2` (pero mantiene `data-span="3"`).

> Idea futura: spans responsivos (ej: `{ base:1, md:2, lg:3 }`).

## 🛠️ Desarrollo

### Estructura del proyecto

```
shadcn-registry/
├── app/                    # Aplicación Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de documentación
├── components/            # Componentes del registro
│   ├── description/       # Componente Description
│   │   ├── __tests__/     # Tests del componente
│   │   └── description.tsx
│   └── ui/                # Componentes UI base de shadcn
├── lib/                   # Utilidades
│   └── utils.ts          # Función cn() y utilidades
├── registry/             # Metadatos del registro (próximamente)
└── src/test/             # Configuración de tests
```

### Scripts disponibles

```bash
# Desarrollo
pnpm run dev          # Servidor de desarrollo

# Build
pnpm run build        # Build de producción
pnpm run start        # Servidor de producción

# Testing
pnpm test             # Ejecutar tests en modo watch
pnpm run test:run     # Ejecutar tests una vez
pnpm run test:ui      # Abrir interfaz de tests

# Linting
pnpm run lint         # Ejecutar ESLint
```

### Ejecutar tests

```bash
# Todos los tests
pnpm test

# Test específico
pnpm test -- components/description/__tests__/description.test.tsx

# Tests con interfaz gráfica
pnpm run test:ui
```

## 🏗️ Arquitectura

### Stack tecnológico

- **Framework**: Next.js 15 con React 19
- **Styling**: Tailwind CSS v4 con CSS Variables
- **UI Components**: Radix UI primitives
- **Testing**: Vitest + Testing Library
- **TypeScript**: Configuración estricta
- **Build**: Next.js build optimizado

### Patrones de diseño

- **Componentes funcionales** con hooks de React
- **Context API** para configuración compartida
- **Class Variance Authority (cva)** para variantes de componentes
- **Path aliases** (@/) para imports limpios
- **CSS Variables** para theming consistente

## 🎨 Personalización

### Temas

El registro soporta personalización completa de temas a través de CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... más variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... variables para modo oscuro */
}
```

### Configuración

La configuración del proyecto se encuentra en `components.json`:

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

## 🤝 Contribución

### Proceso de contribución

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### Guidelines

- ✅ Usa TypeScript con tipado estricto
- ✅ Sigue las convenciones de naming del proyecto
- ✅ Agrega tests para nuevos componentes
- ✅ Documenta los props con JSDoc
- ✅ Asegúrate de que los tests pasen (`pnpm test`)
- ✅ Ejecuta linting (`pnpm run lint`)

### Agregar un nuevo componente

1. **Crea** la estructura del componente:
   ```
   components/mi-componente/
   ├── __tests__/
   │   └── mi-componente.test.tsx
   └── mi-componente.tsx
   ```

2. **Implementa** el componente con:
   - Props tipadas con TypeScript
   - Variantes usando `cva`
   - Tests comprehensivos
   - Documentación JSDoc

3. **Agrega** ejemplos a la documentación

## 📋 API del Registry

### Endpoints disponibles

```
GET /api/registry
├── Lista todos los componentes disponibles
├── Response: Array<ComponentInfo>

GET /api/registry/[name]
├── Obtiene información detallada de un componente
├── Response: ComponentDetail

GET /api/registry/[name]/code
├── Obtiene el código fuente del componente
├── Response: { files: ComponentFile[] }
```

### Ejemplo de respuesta

```json
{
  "name": "description",
  "displayName": "Description",
  "description": "Componente flexible para mostrar información estructurada",
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

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**piperubio**
- GitHub: [@piperubio](https://github.com/piperubio)
- Website: [piperubio.dev](https://piperubio.dev)

## 🙏 Agradecimientos

- [shadcn](https://github.com/shadcn) por crear el increíble sistema shadcn/ui
- [Radix UI](https://radix-ui.com) por los primitives accesibles
- La comunidad de React por las herramientas y librerías

---

**¿Necesitas ayuda?** Abre un [issue](https://github.com/piperubio/shadcn-registry/issues) o consulta la [documentación](https://registry.piperubio.dev).