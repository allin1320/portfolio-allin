# Tasks: Single Page Portfolio

**Input**: Design documents from `/specs/001-single-page-portfolio/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan
- [X] T002 Initialize TypeScript project with Astro and TailwindCSS dependencies
- [X] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Setup data structures for projects, skills, and contact information
- [X] T005 [P] Create base layout component in src/layouts/BaseLayout.astro
- [X] T006 [P] Setup global styles with TailwindCSS in src/styles/global.css
- [X] T007 Configure environment configuration management

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Portfolio Overview (Priority: P1) 🎯 MVP

**Goal**: Display hero section with name, professional title, brief bio, and call-to-action buttons

**Independent Test**: Load the homepage and verify hero section displays correctly with title, bio, and CTA buttons

### Implementation for User Story 1

- [X] T008 [US1] Create hero section component in src/components/HeroSection.astro
- [X] T009 [US1] Implement hero content with title "Vous recherchez un développeur ?", bio text, and CTA buttons "Télécharger CV" and "Me contacter" in src/components/HeroSection.astro
- [X] T010 [US1] Add modern styling with specified color oklch(0.52 0.14 247.06) and animations in src/components/HeroSection.astro
- [X] T011 [US1] Integrate hero section into main page src/pages/index.astro

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Browse Projects (Priority: P2)

**Goal**: Display project cards with title, description, technologies, and links

**Independent Test**: Navigate to projects section and view project details including cards with icons, titles, descriptions, and tech icons

### Implementation for User Story 2

- [X] T012 [US2] Create project data structure in src/data/projects.ts
- [X] T013 [P] [US2] Create project card component in src/components/ProjectCard.astro
- [X] T014 [US2] Implement projects section with cards for "Plateforme SAAS", "Système CRM", "Freelance Dispo", "Intégration IA" in src/components/ProjectsSection.astro
- [X] T015 [US2] Add project details including descriptions and technology icons in src/components/ProjectCard.astro
- [X] T016 [US2] Integrate projects section into main page src/pages/index.astro

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Contact Information (Priority: P3)

**Goal**: Display contact details including phone, email, and LinkedIn

**Independent Test**: Locate and verify contact details are accessible with phone, email, and LinkedIn link

### Implementation for User Story 3

- [X] T017 [US3] Create contact data structure in src/data/contact.ts
- [X] T018 [US3] Create contact section component in src/components/ContactSection.astro
- [X] T019 [US3] Implement contact display with phone +261 38 72 158 90, email, and LinkedIn https://www.linkedin.com/in/allin-ramanampisoa-784298173 in src/components/ContactSection.astro
- [X] T020 [US3] Integrate contact section into main page src/pages/index.astro

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Additional Sections - About and Skills

**Purpose**: Add about me and skills sections to complete the portfolio

- [X] T021 Create about section component in src/components/AboutSection.astro
- [X] T022 Implement about content with professional summary 'Professionnel en informatique avec 8 ans d'expérience dans le développement de solutions logicielles et la gestion de projets techniques. Expert dans l’analyse des besoins, la conception et la mise en œuvre de systèmes robustes et innovants. Compétences avérées en communication, en travail d'équipe et en résolution de problèmes complexes. Capacité à assurer la qualité des livrables tout en respectant les délais et les exigences des clients.' from CV in src/components/AboutSection.astro
- [X] T023 Create skills section component in src/components/SkillsSection.astro
- [X] T024 Implement skills with icons for languages, frameworks, and tools in src/components/SkillsSection.astro
- [X] T025 Integrate about and skills sections into main page src/pages/index.astro

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T026 [P] Documentation updates in README.md
- [X] T027 Code cleanup and refactoring
- [X] T028 Performance optimization across all sections
- [X] T029 Security hardening
- [X] T030 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Additional Sections (Phase 6)**: Depends on user stories completion
- **Polish (Phase 7)**: Depends on all desired sections being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create hero section component in src/components/HeroSection.astro"
Task: "Implement hero content with title, bio, and CTA buttons in src/components/HeroSection.astro"
Task: "Add modern styling with specified color and animations in src/components/HeroSection.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add About and Skills → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence