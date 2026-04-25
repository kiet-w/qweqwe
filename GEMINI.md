# Gemini Session Context

This file maintains the project state and technical decisions for Gemini CLI.

## Tech Stack (Updated 2026-04-25)
- **Framework:** Next.js 15+ (App Router)
- **Runtime:** React 19
- **Architecture:** Feature-Sliced Design (FSD) + Atomic Design
- **State Management:** Zustand (Global), TanStack Query (Server State)
- **Validation:** Zod
- **Styling:** Tailwind CSS (v4)

## Logic Placement Rules (Atomic-FSD)
- **Shared (Atoms/Molecules):** Pure UI logic only (isOpen, hover). No business logic.
- **Entities (Organisms/Domain):** Business models, TanStack Query hooks, data transformation, Zod schemas.
- **Features (Interaction):** User actions, React 19 Server Actions, Mutation logic, Optimistic UI.
- **Widgets (Composition):** Assembling Entities and Features into complex blocks.
- **Pages (Structure):** Routing, URL params, and initial data fetching.

## Session History
- **2026-04-25:** Initial project setup.
- **2026-04-25:** Integrated Atomic Design into FSD. Moved architecture to `src/`. Established "Golden Rules" for logic placement and component hierarchy.
