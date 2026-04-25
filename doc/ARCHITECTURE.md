# Architecture: Atomic FSD

This project combines **Feature-Sliced Design (FSD)** for business logic/dependency management and **Atomic Design** for UI hierarchy.

## 1. Directory Structure & Atomic Mapping

### Tầng Shared (Atoms & Molecules)
- **Location:** `src/shared/ui/atoms/` and `src/shared/ui/molecules/`
- **Responsibility:** Pure Presentational Components (Buttons, Inputs, FormFields).
- **Rule:** No business logic, no API calls, no Zustand. Only props and UI-local state.

### Tầng Entities (Domain Organisms)
- **Location:** `src/entities/<entity>/ui/`
- **Responsibility:** Components that display business data (e.g., `UserCard`, `ProductRow`).
- **Logic:** Server state (TanStack Query), Zod schemas, domain-specific calculations.

### Tầng Features (Interaction Organisms)
- **Location:** `src/features/<feature>/ui/`
- **Responsibility:** User actions (e.g., `AddToCartButton`, `LoginForm`).
- **Logic:** Server Actions (`use server`), `useOptimistic`, `useActionState`, form validation.

### Tầng Widgets (Complex Organisms)
- **Location:** `src/widgets/<widget>/ui/`
- **Responsibility:** Self-contained blocks (e.g., `ProductList`, `Header`).
- **Logic:** Composition of multiple Entities and Features.

## 2. Logic Distribution (The "Where to put what" Guide)

| Logic Type | FSD Layer | Tools |
| :--- | :--- | :--- |
| **UI Logic** (styles, toggles) | `shared/ui` | Tailwind, `useState` |
| **Domain Logic** (calc, mapping) | `entities` | TypeScript, Pure Functions |
| **Server State** (fetching, cache) | `entities` | TanStack Query |
| **Interaction Logic** (mutations) | `features` | React 19 Server Actions |
| **Form Validation** | `features` | Zod |
| **Global State** (Auth, Theme) | `app` / `shared` | Zustand |
| **Composition Logic** | `widgets` | RSC (Server Components) |

## 3. Golden Rules
1.  **Public API (File `index.ts`):** Mỗi thư mục con (slice) trong `features`, `entities`, `widgets` đều phải có một file `index.ts`. Các tầng bên trên chỉ được phép import từ file `index.ts` này, tuyệt đối không được phép "thọc sâu" vào các folder bên trong như `ui/` hay `model/`. Điều này giúp tạo ra một giao diện công khai rõ ràng cho từng module và dễ dàng refactor code nội bộ mà không ảnh hưởng đến các module khác.
2.  **Luồng phụ thuộc một chiều:** Luôn nhớ rằng tầng cao hơn có thể dùng tầng thấp hơn, nhưng tầng thấp hơn không được biết về tầng cao hơn. Ví dụ: `entities` tuyệt đối không được import bất cứ thứ gì từ `features` hay `widgets`. Quy tắc này đảm bảo sự tách biệt trách nhiệm và ngăn ngừa các vòng lặp phụ thuộc không mong muốn.
3.  **Tối ưu hóa React 19:** Với cấu trúc `features/<feature>/model`, bạn nên tận dụng hook `useActionState` và `useOptimistic` để xử lý trạng thái gửi form và cập nhật giao diện tức thì, giúp giảm độ trễ trải nghiệm cho người dùng. Điều này đặc biệt quan trọng để tận dụng tối đa khả năng của React 19 và Server Components.

