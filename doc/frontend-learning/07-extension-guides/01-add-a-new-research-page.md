# 01 - Add A New Research Page

Gia su ban muon them page moi: `collections`.

## B1 - Tao route

Tao:

`src/app/[lang]/(research)/collections/page.tsx`

Neu can loading:

`src/app/[lang]/(research)/collections/loading.tsx`

## B2 - Them widget page body

Tao:

`src/widgets/collections/ui/collections-page.tsx`

va

`src/widgets/collections/index.ts`

## B3 - Page route chi nen compose

`page.tsx` nen giong pattern hien tai:

```tsx
import { getDictionary, isLocale } from "@/shared/i18n";
import { CollectionsPage } from "@/widgets/collections";
```

No nen:

- lay `lang`
- validate locale
- lay dictionary
- render widget

## B4 - Neu co nav, cap nhat o 3 noi

1. `src/shared/config/routes.ts`
2. dictionary `en.json` va `vi.json`
3. `src/widgets/research-sidebar/ui/research-sidebar.tsx`

## B5 - Neu co shared UI moi

Chi dua vao `shared/ui` khi component:

- khong biet route
- khong biet business area
- co kha nang tai su dung

## Checklist

- co `index.ts`
- khong deep import
- route dung `ROUTES`
- text dung dictionary
- metadata dung `generateMetadata`

## Huong mo rong

- Them page `collections/[id]`
- Them `reportDetail` page that su cho `ROUTES.reportDetail`
- Them filter/search cho page moi qua `features`
