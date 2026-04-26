# 01 - How To Read This Project

Neu ban la nguoi moi, thuong ban se bi ngop vi nhin thay qua nhieu folder. Cach dung hon la doc theo luong chay.

## Thu tu doc dung

1. `src/app/layout.tsx`
2. `src/app/[lang]/layout.tsx`
3. `src/app/[lang]/page.tsx`
4. `src/widgets/landing/ui/landing-page.tsx`
5. `src/shared/ui/*`
6. `src/app/[lang]/(research)/layout.tsx`
7. `src/widgets/research-sidebar/ui/research-sidebar.tsx`
8. `src/app/[lang]/(research)/*/page.tsx`

## Vi sao phai doc theo thu tu nay

- `app/` cho ban biet route vao tu dau
- `page.tsx` cho ban biet page nao render widget nao
- `widgets/` cho ban biet page do duoc lap tu nhung khoi nao
- `shared/` cho ban biet nhung khoi nho duoc tai su dung ra sao
- `features/` cho ban biet noi dat interaction
- `entities/` cho ban biet type domain va du lieu cot loi

## Mot cach nhin de de hieu hon

Hay tuong tuong project co 5 tang:

1. `app` = cua vao va luat di duong
2. `widgets` = bo cuc lon cua page
3. `features` = hanh dong cua nguoi dung
4. `entities` = du lieu nghiep vu
5. `shared` = do nghe dung chung

## Cach doc mot file nhanh ma van hieu

Doc theo 6 cau hoi sau:

1. File nay thuoc layer nao
2. File nay nhan vao nhung props gi
3. File nay co render UI hay co ca logic
4. File nay co biet route hay business khong
5. File nay import tu dau
6. Neu doi dong nay thi file nao khac bi anh huong

## Vi du that

Trong `src/app/[lang]/page.tsx`:

```tsx
const dict = await getDictionary(lang);
return <LandingPage locale={lang} dictionary={dict} />;
```

Y nghia:

- page khong tu viet UI lon
- page load data can thiet
- widget lo phan giao dien

Tac dong:

- neu doi shape cua `dictionary`, `LandingPage` co the vo
- neu doi type `lang`, route locale co the vo

## Sai lam nguoi moi hay gap

- Doc `shared/ui` truoc `app`
- Nhin 1 component roi nghi no la toan bo app
- Thay JSX la lao vao CSS ma chua hieu luong data
- Nhap nhem giua `widget` va `shared/ui`

## Tips

- Luon doc import dau tien
- Neu thay `use client`, danh dau file do la client component
- Neu thay `async function Page`, danh dau file do la server page
- Neu thay `params: Promise<{ ... }>` hay dung `await params`

## Huong mo rong

- Tao them file `02-glossary.md` de ghi chu cac tu nhu `layout`, `route group`, `widget`, `entity`
- Tao them mot note rieng cho moi file ban doc lan dau
- Tu ve lai so do project bang tay se giup nho rat nhanh
