# Code Review Graph (Architectural Mapping)

This document provides a map of the project's dependency hierarchy and architectural health, based on Feature-Sliced Design (FSD) and Atomic Design principles.

## 1. Dependency Hierarchy
Imports must always flow **downwards**. A layer can only import from layers below it.

| Layer | Imports From | Description |
| :--- | :--- | :--- |
| **App** (`src/app`) | Pages, Widgets, Features, Entities, Shared | Global setup, routing, providers. |
| **Pages** (`src/pages`) | Widgets, Features, Entities, Shared | Composition of widgets for specific routes. |
| **Widgets** (`src/widgets`) | Features, Entities, Shared | Self-contained, complex UI blocks. |
| **Features** (`src/features`) | Entities, Shared | User interactions and business actions. |
| **Entities** (`src/entities`) | Shared | Business domain logic and data models. |
| **Shared** (`src/shared`) | *Nothing* | Reusable UI (Atoms/Molecules) and utilities. |

---

## 2. Current Project Map

### Slices & Health Status
| Slice | Layer | Public API (`index.ts`) | Status |
| :--- | :--- | :--- | :--- |
| `user` | Entities | ❌ Missing | ⚠️ Needs Public API |
| `add-to-cart` | Features | ❌ Missing | ⚠️ Needs Public API |
| `product-list` | Widgets | ❌ Missing | ⚠️ Needs Public API |
| `atoms` | Shared/UI | N/A | ✅ Ready |
| `molecules` | Shared/UI | N/A | ✅ Ready |

---

## 3. Violations & Risks

### ⚠️ Critical: Missing Public APIs (Golden Rule #1)
The following slices are missing `index.ts` files. This will lead to "Deep Imports" which bypasses module boundaries:
- `src/entities/user/`
- `src/features/add-to-cart/`
- `src/widgets/product-list/`

**Action:** Create `index.ts` for each slice to export only necessary UI components or models.

### ✅ Pass: One-way Dependency (Golden Rule #2)
No circular dependencies or upward imports detected.

---

## 4. Technical Stack Context
- **Framework:** Next.js 15+ (App Router)
- **State:** Zustand (Global), TanStack Query (Server State)
- **Styling:** Tailwind CSS v4
- **Interaction:** React 19 Server Actions (Features)
