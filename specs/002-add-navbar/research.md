# Research: Add Navbar

**Feature**: Add Navbar  
**Date**: 2025-11-20  
**Researcher**: opencode

## Testing Approach

**Decision**: Use Vitest for unit tests and Playwright for integration tests  
**Rationale**: Vitest is lightweight for Astro components, Playwright handles browser interactions for navbar functionality  
**Alternatives considered**: Jest (heavier), Cypress (slower for CI)

## Navbar Implementation Patterns

**Decision**: Fixed navbar with smooth scroll using CSS scroll-behavior and JavaScript fallback  
**Rationale**: CSS smooth scroll is performant, JS fallback ensures compatibility  
**Alternatives considered**: Anchor links only (no smooth scroll), full JS scroll libraries (unnecessary complexity)

## Responsive Navbar Design

**Decision**: Desktop: horizontal layout, Mobile: hamburger menu  
**Rationale**: Standard UX patterns, TailwindCSS makes implementation easy  
**Alternatives considered**: Always horizontal (poor mobile UX), custom collapse (reinvent wheel)