# 02 - Import Rules And Public API

Mot project lon se rat de roi neu import tung file lung tung. Project nay co 2 quy tac thong minh:

1. import theo layer
2. import qua `index.ts`

## 1. Public API la gi

Vi du:

`src/widgets/research-sidebar/index.ts`

```ts
export * from "./ui/research-sidebar";
```

Y nghia:

- ben ngoai khong can biet cau truc ben trong
- ben ngoai chi biet slice nay expose cai gi

## 2. Import dung

Dung:

```ts
import { ResearchSidebar } from "@/widgets/research-sidebar";
```

Khong nen:

```ts
import { ResearchSidebar } from "@/widgets/research-sidebar/ui/research-sidebar";
```

Tai sao:

- neu sau nay doi file structure, code ben ngoai khong can sua
- de enforce boundary

Vi du thuc te da duoc sua trong project nay:

- `LoginPage` truoc day lay section bang deep import tu `@/widgets/landing/ui/...`
- sau refactor, cac section do duoc dua ve `widgets/login/ui/...`
- ket qua la widget `login` khong con phu thuoc vao noi bo cua widget `landing`

## 3. Import rule matrix don gian

- `app` co the import `widgets`, `shared`
- `widgets` co the import `features`, `entities`, `shared`
- `features` co the import `entities`, `shared`
- `entities` co the import `shared`
- `shared` khong import nguoc len tren

## 4. Tac dong cua mot dong import

Vi du trong `src/app/[lang]/(research)/layout.tsx`:

```tsx
import { ResearchSidebar } from "@/widgets/research-sidebar";
```

Y nghia sau dong nay:

- layout nay phu thuoc vao public API cua widget do
- neu widget doi ten export, layout nay phai doi theo
- nhung neu widget doi file noi bo ma van giu export cu, layout khong bi anh huong

## 5. Tips

- Khi ban tao folder moi, tao `index.ts` som
- Khi ban thay import sau vao `ui/...`, hay tu hoi co vi pham boundary khong
- Neu 1 widget can import `ui/...` cua widget khac, do thuong la dau hieu owner dang dat sai cho
- Khi thay 1 file import qua nhieu layer khong hop ly, do la dau hieu can refactor

## Huong mo rong

- Co the them rule ESLint de cam deep import vao mot so layer
- Co the tach file `index.ts` theo type export va runtime export neu project lon hon
