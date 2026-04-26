# 01 - Shared UI, `cn`, Tailwind

Project nay day rat ro cach xay he thong UI thay vi viet CSS lung tung.

## 1. `cn` de lam gi

File: `src/shared/lib/utils.ts`

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Y nghia:

- `clsx` ghep class co dieu kien
- `twMerge` giai quyet class Tailwind bi trung

Vi du:

- `px-4 px-6` -> `twMerge` giu lai cai co hieu luc cuoi

Tai sao thong minh:

- tranh class trung
- de truyen them `className` tu ben ngoai

## 2. Atom va molecule

Atom:

- `Button`
- `Input`
- `Textarea`
- `Icon`

Molecule:

- `PageIntro`
- `NavListItem`
- `FilterSelect`
- `TocNav`

Y nghia:

- atom = vien gach nho nhat
- molecule = ghep mot vai atom lai

## 3. `Button` dung `cva`

File: `src/shared/ui/atoms/button.tsx`

```tsx
const buttonVariants = cva("...", {
  variants: {
    variant: { default: "...", ghost: "...", link: "..." },
    size: { default: "...", icon: "...", lg: "..." },
  },
});
```

Y nghia:

- dinh nghia he thong bien the cho button
- thay vi moi noi tu viet class button lai tu dau

Tac dong:

- doi class trong `buttonVariants` anh huong toan app
- day vua la loi the, vua la diem can than

## 4. `PageIntro` la vi du shared UI dep

File: `src/shared/ui/molecules/page-intro.tsx`

No cho thay mot pattern dep:

- nhan text qua props
- nhan `className` de override
- khong biet business area

Day la shared UI dung nghia.

Luu y:

- Khong phai component nao nhin co ve "tai su dung duoc" cung nen dat o `shared/ui`
- Vi du `QueryComposer` cua project nay duoc dua ve `features/research-query` vi no dai dien cho hanh dong nghiep vu cu the, khong phai mot molecule trung tinh

## 5. Cach doc class Tailwind

Vi du:

```tsx
className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-12"
```

Doc thanh tieng nguoi:

- `mx-auto` = can giua ngang
- `flex` = dung flexbox
- `w-full` = rong het
- `max-w-7xl` = gioi han chieu rong toi da
- `flex-col` = xep doc
- `gap-16` = khoang cach giua item
- `px-6` = padding ngang
- `pb-24` = padding duoi
- `pt-12` = padding tren

## Tips

- Doc class tu trai qua phai
- Nhom class theo y: layout, spacing, color, typography
- Neu class qua dai, nghi den shared component hoac helper

## Huong mo rong

- Them `Card` atom neu project su dung lap lai nhieu
- Them theme tokens ro hon trong CSS variables
- Them variant moi cho `Button` neu workflow that su can
