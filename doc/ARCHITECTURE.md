# Architecture: Atomic FSD

Project nay ket hop `Feature-Sliced Design (FSD)` de kiem soat dependency va `Atomic Design` de to chuc UI.

## 1. Layer mapping hien tai

### `app`

- Chua route tree, layouts, metadata wiring, global styles
- Duoc phep compose shell theo segment route
- Vi du hien tai: `src/app/[lang]/(research)/layout.tsx`

### `shared`

- Chua reusable UI atoms/molecules, utils, i18n
- Khong chua business flow theo page
- Vi du:
  - `src/shared/ui/atoms/`
  - `src/shared/ui/molecules/`
  - `src/shared/i18n/`

### `widgets`

- Chua page-level va shell-level composition
- La noi dung de lap rap cac man hinh lon tu shared pieces va page sections
- Vi du hien tai:
  - `src/widgets/research-shell/`
  - `src/widgets/dashboard/`
  - `src/widgets/landing/`
  - `src/widgets/research-placeholder/`

### `features`

- Danh cho interaction/business actions
- Hien chua phai tam diem cua refactor vua roi

### `entities`

- Danh cho domain-centric data UI va logic
- Hien chua tham gia vao research shell refactor

## 2. Architecture decisions duoc ap dung trong session nay

### A. Shared navbar khong thuoc `shared/ui`

Research navbar khong phai atom/molecule thuan UI. No:

- biet route structure
- phu thuoc locale path
- xac dinh active state theo pathname
- compose research-area navigation

Vi vay navbar duoc dua vao `widgets/research-shell/`, khong dua xuong `shared/ui`.

### B. Shared shell dat o nested layout, khong dat trong moi page

Shell chung duoc dat o:

- `src/app/[lang]/(research)/layout.tsx`

Ly do:

- dung cach App Router chia se UI qua nested layout
- khong lap lai markup sidebar
- cho phep state/layout duoc giu qua navigation

### C. Page widgets chi lo page body

Sau refactor:

- `DashboardPage` khong render `<aside>` nua
- `AgentTrackingPage` khong render sidebar nua
- `report` va `library` scaffold page chi render content body

Rule: page widget khong duoc gianh trach nhiem cua route shell.

## 3. Public API rules

Moi slice trong `widgets`, `features`, `entities` phai expose bang `index.ts`.

Ap dung cho cac module moi:

- `src/widgets/research-shell/index.ts`
- `src/widgets/research-placeholder/index.ts`

Layer ben tren chi nen import qua public API nay, khong deep import vao `ui/...` neu khong that su can thiet.

## 4. Logic distribution sau refactor

| Logic | Layer dung |
| :--- | :--- |
| Route grouping, locale layout, shell boundary | `app` |
| Sidebar shell composition, page composition | `widgets` |
| Reusable nav item primitives | `shared/ui` |
| Dictionary typing va localized content | `shared/i18n` |
| Page-specific body content | `widgets/<page>` |

## 5. Quy tac thiet ke va dependency

1. `shared/ui` phai giu pure, khong biet route business area.
2. `widgets` duoc compose tu `shared`, nhung `shared` khong duoc import nguoc `widgets`.
3. Layout dung chung theo route phai dat trong `app`, khong dat trong page widget.
4. Neu mot component can biet pathname, locale route, hay active navigation, no thuoc shell/widget layer, khong thuoc atom layer.
5. Metadata route van la trach nhiem cua `page.tsx`, ngay ca khi page da duoc wrap boi shell chung.

## 6. Mo rong trong tuong lai

Neu them cac trang moi nhu:

- detailed reports
- saved libraries
- settings/documentation thuc

thi uu tien:

1. Xac dinh no co thuoc research area hay khong
2. Neu co, dat route duoi `src/app/[lang]/(research)/`
3. Tao widget/page body rieng
4. Tai su dung `ResearchShell`
5. Chi them dictionary keys can thiet cho metadata va text moi

## 7. Anti-pattern can tranh

- Copy sidebar vao nhieu page
- Dua active-route logic vao `shared/ui`
- De page widget vua lam content vua lam route shell
- Hardcode nav labels trong component thay vi lay tu dictionary
- Dat route research moi ben ngoai `(research)` roi lap lai layout

## 8. Ket luan

Architecture hien tai chia ro 3 muc:

- `app` lo route va layout boundary
- `widgets` lo shell va page composition
- `shared` lo primitive va i18n

Refactor nay dua navbar cua research area ve dung cho cua no: shared theo route boundary, nhung van nam o widget/app layer thay vi tro thanh mot UI primitive chung chung.

