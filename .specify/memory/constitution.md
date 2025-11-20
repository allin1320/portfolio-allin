<!-- Sync Impact Report
Version change: N/A → 1.0.0
List of modified principles: N/A (new constitution)
Added sections: Core Principles (5), Technical Standards, Development Workflow, Governance
Removed sections: N/A
Templates requiring updates: None (generic templates)
Follow-up TODOs: None
-->

# Allin Portfolio Constitution

## Core Principles

### I. TypeScript Strictness
Use strict TypeScript configuration (astro/tsconfigs/strict). Enable @ts-check in config files. Prefer explicit types over any.

### II. ES Modules
Use ES modules (import/export). Group imports: external libs, then internal modules. Use absolute paths for internal imports.

### III. Naming Conventions
Components: PascalCase. Files: kebab-case for pages/components. Variables/functions: camelCase.

### IV. Astro Practices
Use frontmatter for component logic. Minimize client-side JavaScript. Prefer .astro files over framework components.

### V. Error Handling
Use try/catch for async operations. Validate props in components. Handle missing data gracefully.

## Technical Standards

Formatting: 2-space indentation, single quotes for strings, semicolons required.

## Development Workflow

Build: npm run build. Dev: npm run dev. Preview: npm run preview. Type check: npx astro check. Lint: Add npm run lint script. Test: Add test framework and npm run test.

## Governance

Constitution supersedes all other practices. Amendments require documentation and approval. Versioning follows semantic versioning. Compliance verified in PRs.

**Version**: 1.0.0 | **Ratified**: 2025-11-20 | **Last Amended**: 2025-11-20
