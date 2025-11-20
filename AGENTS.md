# AGENTS.md

## Commands
- **Build**: `npm run build`
- **Dev**: `npm run dev`
- **Preview**: `npm run preview`
- **Type check**: `npx astro check`
- **Lint**: Add `npm run lint` script (e.g., ESLint)
- **Test**: Add test framework (e.g., Vitest) and `npm run test`
- **Single test**: `npm run test -- <test-file>` (once testing is set up)

## Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration (`astro/tsconfigs/strict`)
- Enable `@ts-check` in config files
- Prefer explicit types over `any`

### Imports
- Use ES modules (`import`/`export`)
- Group imports: external libs, then internal modules
- Use absolute paths for internal imports

### Naming
- Components: PascalCase (e.g., `MyComponent`)
- Files: kebab-case for pages/components (e.g., `my-page.astro`)
- Variables/functions: camelCase

### Astro Specific
- Use frontmatter for component logic
- Minimize client-side JavaScript
- Prefer `.astro` files over framework components

### Error Handling
- Use try/catch for async operations
- Validate props in components
- Handle missing data gracefully

### Formatting
- 2-space indentation
- Single quotes for strings
- Semicolons required