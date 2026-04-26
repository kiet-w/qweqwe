# 01 - Code Quality And Optimization

Frontend gioi khong chi la "render duoc UI". Frontend tot phai:

- de doc
- de doi
- kho vo
- co type tot
- co convention ro

## 1. TypeScript `strict`

File: `tsconfig.json`

```json
"strict": true
```

Y nghia:

- TypeScript check chat hon
- bat ban nghi ky hon truoc khi pass data

Loi ich cho nguoi moi:

- bi TypeScript "chan" truoc khi bug chay ra production

## 2. ESLint

File: `eslint.config.mjs`

Project dang dung:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Y nghia:

- bat loi style va 1 so loi logic pho bien
- nhac ban ve best practice cua Next.js

## 3. Test

File: `src/app/page.test.tsx`

Day la test cho home page.

Y nghia:

- render page
- check heading/button co xuat hien khong

Ban hoc duoc gi:

- test co the render page async
- test nen check hanh vi user thay, khong nen test implementation detail qua muc

## 4. Mot so pattern toi uu thong minh trong project

- route string tap trung trong `ROUTES`
- text tap trung trong dictionary
- shell chung dat o layout group
- shared UI co `className` de override
- `Button` co variant/size de tranh lap CSS

## 5. Bẫy nguoi moi hay gap

- hardcode URL
- hardcode text
- copy paste class
- dat logic route vao shared UI
- dat business logic vao page presentation

## 6. Tips and tricks

- Khi mot chuoi lap lai 2-3 lan, nghi den helper hoac config
- Khi 1 component qua dai, tach theo trach nhiem, khong tach ngau nhien
- Khi co du lieu co "shape" ro, tao type/interface som
- Khi viet UI list, dung `map` + `key`
- Khi component can browser hook, danh dau `"use client"` ro rang

## Huong mo rong

- Them test cho research pages
- Them test cho `ResearchSidebar` active state
- Them storybook hoac visual snapshot neu project lon hon
