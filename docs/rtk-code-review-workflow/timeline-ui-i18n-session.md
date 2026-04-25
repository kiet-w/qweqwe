# Timeline: UI Clone + i18n + RTK + Code Review Graph

## Muc dich

File nay ghi lai theo format van hanh:

- thoi diem
- lenh da chay
- vi sao chay
- ket qua
- buoc tiep theo

Thoi gian o day la timeline logic theo tung chang thao tac, khong phai audit log he thong tuyet doi.

---

## Chang 1: Khoi dong va lay context

### Thoi diem

- Dau phien

### Lenh da chay

```powershell
Get-Content -Raw 'C:\Users\admintp\.codex\RTK.md'
Get-Content -Raw 'D:\my-frontend-project\doc\clone\intro.html'
Get-ChildItem -Name
rg --files node_modules/next/dist/docs
```

### Vi sao chay

- doc local rule cua `rtk`
- doc source HTML can clone
- xem root project co gi
- xac nhan project dang co bundled Next.js docs

### Ket qua

- biet duoc local rule yeu cau prefix command bang `rtk`
- thay ro `intro.html` la mot static landing page
- xac nhan repo dang la Next.js app nho
- xac nhan co tai lieu Next.js App Router trong `node_modules/next/dist/docs`

### Buoc tiep theo

- chuyen sang doc App Router docs va app source hien tai

---

## Chang 2: Chuyen sang `rtk` pattern dung

### Thoi diem

- Sau khi phat hien shell flow ban dau gap van de

### Lenh da chay

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'node_modules/next/dist/docs/01-app/01-getting-started/11-css.md'"
rtk rg --files src
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'package.json'"
```

### Vi sao chay

- `Get-Content` la cmdlet, khong chay truc tiep qua `rtk`
- can doc Next.js App Router docs truoc khi code
- can biet source tree hien tai
- can check dependencies / scripts

### Ket qua

- xac nhan app dung App Router
- xac nhan Tailwind v4
- xac nhan project source rat gon
- xac nhan co mot so dependency theo huong shadcn

### Buoc tiep theo

- doc cac file app hien tai va xac dinh architecture can sua

---

## Chang 3: Doc app hien tai

### Thoi diem

- Sau khi co docs co ban

### Lenh da chay

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/app/page.tsx'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/app/layout.tsx'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/app/globals.css'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/app/page.test.tsx'"
```

### Vi sao chay

- xem app dang o scaffold state hay da co structure
- xem typography / token / layout co san
- xem test hien tai cover gi

### Ket qua

- `src/app/page.tsx` van la starter page
- `layout.tsx` co `next/font`
- `globals.css` da co mot so token
- test dang test content cua starter page

### Buoc tiep theo

- doc them `ui/ux.md` va source foundation trong `shared/ui`

---

## Chang 4: Ap dung rule `ui/ux.md`

### Thoi diem

- Sau khi user them `ui/ux.md`

### Lenh da chay

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'ui/ux.md'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'doc/clone/intro.html'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/shared/ui/atoms/button.tsx'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'src/shared/lib/utils.ts'"
```

### Vi sao chay

- can dua source clone vao dung layer
- can xac nhan da co UI foundation nao co the tai su dung

### Ket qua

- xac nhan rule uu tien `shared/ui` va `widgets`
- xac nhan project da co `button.tsx` va `utils.ts`
- quyet dinh khong install lai shadcn tu dau

### Buoc tiep theo

- dung code review graph de lay them context

---

## Chang 5: Dung code review graph de lay context

### Thoi diem

- Truoc khi sua code lon

### Lenh da chay

Tool da goi:

- `get_minimal_context_tool`
- `query_graph_tool(pattern="file_summary", target="src/app/page.tsx")`
- `query_graph_tool(pattern="file_summary", target="src/shared/ui/atoms/button.tsx")`
- `query_graph_tool(pattern="file_summary", target="src/shared/lib/utils.ts")`

### Vi sao chay

- lay file-level context nhanh
- xem knowledge graph da biet gi ve page hien tai
- check co foundation nao can tai su dung

### Ket qua

- `get_minimal_context_tool` timeout
- `query_graph_tool` tren `src/app/page.tsx` tra ve `File` + `Home`
- query tren mot so file khac co luc ra `0 result`

### Buoc tiep theo

- fallback ve doc source truc tiep
- tiep tuc refactor dua tren structure da xac dinh

---

## Chang 6: Doc Next.js i18n docs

### Thoi diem

- Luc user yeu cau them i18n

### Lenh da chay

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'node_modules/next/dist/docs/01-app/02-guides/internationalization.md'"
```

### Vi sao chay

- user yeu cau strict Next.js flow
- i18n cua App Router co pattern rieng

### Ket qua

- xac nhan pattern dung:
  - `app/[lang]`
  - `generateStaticParams`
  - dictionary loading theo locale

### Buoc tiep theo

- tao `shared/i18n`
- move page vao `app/[lang]`

---

## Chang 7: Refactor code theo layer

### Thoi diem

- Giai doan edit chinh

### Lenh da chay

Lenh edit duoc thuc hien bang `apply_patch`.

### Vi sao chay

- can tao structure moi thay vi sua mot file page duy nhat

### Ket qua

Toi da tao / sua:

- `src/shared/i18n/config.ts`
- `src/shared/i18n/get-dictionary.ts`
- `src/shared/i18n/messages/en.json`
- `src/shared/i18n/messages/vi.json`
- `src/shared/ui/atoms/textarea.tsx`
- `src/shared/ui/atoms/icon.tsx`
- `src/shared/ui/atoms/typography.tsx`
- `src/shared/ui/molecules/query-composer.tsx`
- `src/widgets/landing/site-header.tsx`
- `src/widgets/landing/hero-section.tsx`
- `src/widgets/landing/methodology-section.tsx`
- `src/widgets/landing/site-footer.tsx`
- `src/app/[lang]/layout.tsx`
- `src/app/[lang]/page.tsx`
- `src/app/page.tsx`
- `src/app/page.test.tsx`
- `src/app/layout.tsx`
- `ui/ux.md`
- `tsconfig.json`

### Buoc tiep theo

- verify source tree va chay test / lint

---

## Chang 8: Verify file da ton tai

### Thoi diem

- Sau khi patch nhieu file

### Lenh da chay

```powershell
rtk rg --files src
```

### Vi sao chay

- check file moi da vao source tree chua
- xac nhan widget va i18n files da ton tai that

### Ket qua

- thay du cac file moi trong `src/widgets`, `src/shared/i18n`, `src/shared/ui`, `src/app/[lang]`

### Buoc tiep theo

- chay test va lint

---

## Chang 9: Chay test lan 1

### Thoi diem

- Sau refactor ban dau

### Lenh da chay

```powershell
rtk npm run test:run -- src/app/page.test.tsx
```

### Vi sao chay

- verify page localized moi

### Ket qua

- fail vi import `@/widgets/landing/hero-section` khong resolve duoc

### Buoc tiep theo

- check `tsconfig.json` va `vitest.config.mts`

---

## Chang 10: Xu ly loi alias

### Thoi diem

- Ngay sau test fail

### Lenh da chay

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'tsconfig.json'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'vitest.config.mts'"
```

### Vi sao chay

- tim nguyen nhan path alias khong resolve

### Ket qua

- phat hien `@/*` dang map ve `./*`, khong uu tien `./src/*`

### Buoc tiep theo

- sua `tsconfig.json`
- rerun test

---

## Chang 11: Chay test lan 2

### Thoi diem

- Sau khi sua alias

### Lenh da chay

```powershell
rtk npm run test:run -- src/app/page.test.tsx
```

### Vi sao chay

- verify alias fix

### Ket qua

- fail tiep vi `server-only` khong resolve trong Vitest

### Buoc tiep theo

- sua `src/shared/i18n/get-dictionary.ts`

---

## Chang 12: Xu ly loi `server-only`

### Thoi diem

- Sau test fail lan 2

### Lenh da chay

Edit bang `apply_patch`:

- bo `import "server-only";`

### Vi sao chay

- Vitest khong resolve dependency nay trong environment hien tai

### Ket qua

- dictionary loader tro nen test-friendly

### Buoc tiep theo

- rerun test
- thu build

---

## Chang 13: Chay test lan 3 va build

### Thoi diem

- Sau khi bo `server-only`

### Lenh da chay

```powershell
rtk npm run test:run -- src/app/page.test.tsx
rtk npm run build
```

### Vi sao chay

- xac nhan page chay duoc
- xac nhan build App Router

### Ket qua

- test pass
- build fail voi:
  - `EPERM`
  - `unlink '.next/types/cache-life.d.ts'`

### Buoc tiep theo

- khong xoa manh tay `.next`
- chay lint target tren file da doi

---

## Chang 14: Lint va review bo sung

### Thoi diem

- Cuoi phien code

### Lenh da chay

```powershell
rtk npm run lint
rtk npm run lint -- src/app/layout.tsx src/app/page.tsx src/app/page.test.tsx src/app/[lang]/layout.tsx src/app/[lang]/page.tsx src/shared/i18n/config.ts src/shared/i18n/get-dictionary.ts src/shared/ui/atoms/button.tsx src/shared/ui/atoms/icon.tsx src/shared/ui/atoms/textarea.tsx src/shared/ui/atoms/typography.tsx src/shared/ui/molecules/query-composer.tsx src/widgets/landing/site-header.tsx src/widgets/landing/hero-section.tsx src/widgets/landing/methodology-section.tsx src/widgets/landing/site-footer.tsx
```

### Vi sao chay

- lint tong the de xem repo state
- lint target de xac nhan scope thay doi cua toi sach

### Ket qua

- lint tong the co warning unrelated trong `test/setup.ts`
- lint target cua file da sua pass

### Buoc tiep theo

- ghi worklog / SOP vao markdown

---

## Chang 15: Ghi tai lieu

### Thoi diem

- Sau khi verify xong

### Lenh da chay

Edit bang `apply_patch`:

- `session-worklog-ui-i18n.md`
- `docs/how-i-used-rtk-and-code-review-graph.md`
- `docs/rtk-code-review-workflow/README.md`
- `docs/rtk-code-review-workflow/timeline-ui-i18n-session.md`

### Vi sao chay

- user yeu cau log rat chi tiet
- can co mot ban SOP ngan
- can co mot ban timeline dang van hanh
- can gom tai lieu ve mot cum de de doc lai

### Ket qua

- da co bo tai lieu day du theo 3 lop:
  - worklog rat chi tiet
  - SOP thao tac
  - timeline tung chang

### Buoc tiep theo

- san sang bo sung them neu can:
  - locale switcher
  - browser locale redirect
  - build cleanup neu user cho phep

---

## Ket luan timeline

Workflow thuc te cua phien nay la:

1. doc local rule
2. doc source clone
3. doc app source
4. doc Next.js docs
5. goi code review graph de lay context
6. refactor theo layer
7. them i18n
8. fix alias
9. fix test environment issue
10. chay test / lint / build
11. ghi lai toan bo quy trinh thanh docs

Day la ban ghi van hanh thuan logic, de co the lap lai cho cac task sau.
