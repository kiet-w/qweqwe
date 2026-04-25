# SOP: How I Used RTK and Code Review Graph in This Project

## 1. Muc dich cua file nay

File nay la ban tom tat mang tinh thao tac chuan, de co the lap lai quy trinh khi can:

- clone mockup / html vao app
- refactor UI theo dung layer
- dung `rtk` de doc file va chay check
- dung code review graph de lay context va review impact

File nay ngan hon `session-worklog-ui-i18n.md` va uu tien tinh thuc dung.

---

## 2. Khi nao dung `rtk`

Trong project nay, `rtk` duoc dung nhu shell wrapper mac dinh.

Toi dung `rtk` cho 4 nhom viec:

- doc file
- tim file / tim source tree
- chay test / lint / build
- doc lai config / verify thay doi

### Pattern 1: Doc file PowerShell

Neu can doc file bang PowerShell cmdlet, dung:

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'path/to/file'"
```

Dung cho:

- `ui/ux.md`
- `doc/clone/intro.html`
- `package.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Khong dung:

```powershell
rtk Get-Content ...
```

Vi `Get-Content` khong phai binary trong PATH.

### Pattern 2: Tim file nhanh

Dung:

```powershell
rtk rg --files src
```

Muc dich:

- xem source tree that su
- check file moi da duoc tao chua
- tranh sua dua tren assumption

### Pattern 3: Chay scripts cua project

Dung:

```powershell
rtk npm run test:run -- src/app/page.test.tsx
rtk npm run lint
rtk npm run lint -- <list-file-da-sua>
rtk npm run build
```

Muc dich:

- verify tung phan
- giam noise bang targeted check

### Pattern 4: Khi `rtk` khong resolve duoc binary

Neu `rtk eslint ...` fail:

- dung qua npm script

```powershell
rtk npm run lint -- ...
```

Neu `rtk Get-Content ...` fail:

- dung `rtk proxy powershell ...`

---

## 3. Khi nao dung Code Review Graph

Code review graph trong project nay khong duoc dung de thay the viec doc code that.

Toi dung no cho 2 muc tieu:

- lay context nhanh truoc khi sua
- thu review impact sau khi sua

### Tool 1: `query_graph_tool`

Day la tool huu ich nhat trong phien nay.

Pattern:

- query `file_summary`
- nham vao file dang sua

Vi du:

- `src/app/page.tsx`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/lib/utils.ts`

Muc dich:

- xac nhan file graph da biet chua
- xem file co node / function nao noi bat
- giam muc do "sua mu"

### Tool 2: `get_minimal_context_tool`

Tool nay duoc goi de lay context tong quan cua task.

Trong phien nay:

- bi timeout

Ket luan thao tac:

- co the thu truoc
- neu timeout, khong nen dung lai qua lau
- fallback ve `query_graph_tool` + doc file truc tiep

### Tool 3: `detect_changes_tool`

Tool nay duoc goi sau khi sua de xem blast radius / review risk.

Trong phien nay:

- bi timeout

Ket luan thao tac:

- dung nhu lop review bo sung
- khong duoc phu thuoc hoan toan vao no

---

## 4. Cach ket hop `rtk` va Code Review Graph dung cach

Workflow toi da dung:

1. Dung `rtk` de doc rule va source that.
2. Dung code review graph de lay context nhe tren file quan trong.
3. Dung `rtk` de doc them file lien quan.
4. Sua code.
5. Dung code review graph thu review thay doi.
6. Dung `rtk` chay test / lint / build.

Noi ngan gon:

- `rtk` = cong cu thao tac chinh
- code review graph = cong cu bo sung context / review

Khong nen dao nguoc:

- khong nen chi nhin graph ma khong doc file that
- khong nen doi graph xong moi dam sua neu tool dang timeout

---

## 5. Logic thao tac toi da ap dung trong bai clone `intro.html`

### Buoc 1: Doc input

Toi doc:

- `ui/ux.md`
- `doc/clone/intro.html`
- `package.json`
- current app files

Dung `rtk proxy powershell -NoProfile -Command "Get-Content -Raw ..."`

### Buoc 2: Dung graph de lay context

Toi query:

- `src/app/page.tsx`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/lib/utils.ts`

Muc dich:

- xac nhan app dang o scaffold state
- xac nhan da co shared UI foundation

### Buoc 3: Xac dinh architecture truoc khi code

Toi khong dua HTML vao mot file page duy nhat.

Toi chia thanh:

- `shared/ui/atoms`
- `shared/ui/molecules`
- `widgets/landing`
- `shared/i18n`
- `app/[lang]`

### Buoc 4: Code theo layer

Toi tao:

- atoms: `textarea`, `icon`, `typography`
- molecule: `query-composer`
- widgets: `site-header`, `hero-section`, `methodology-section`, `site-footer`
- i18n: `config`, `get-dictionary`, `messages/en.json`, `messages/vi.json`
- route: `app/[lang]/layout.tsx`, `app/[lang]/page.tsx`

### Buoc 5: Verify bang `rtk`

Toi chay:

```powershell
rtk npm run test:run -- src/app/page.test.tsx
rtk npm run lint -- <changed-files>
rtk npm run build
```

### Buoc 6: Xu ly loi

Toi gap:

- alias `@/*` resolve sai
- `server-only` fail trong Vitest
- `.next/types/cache-life.d.ts` bi lock khi build

Toi fix:

- sua `tsconfig.json`
- bo `server-only` import khoi dictionary loader
- giu nguyen build blocker va report lai, khong force delete

---

## 6. Nguyen tac ra quyet dinh

Khi dung `rtk`:

- uu tien command gon
- uu tien targeted checks
- uu tien doc file can thiet

Khi dung code review graph:

- uu tien query nhe
- dung de bo sung context
- timeout thi fallback ngay

Khi code UI:

- khong hard-code text trong `shared/ui`
- khong dua business logic vao atoms/molecules
- widget chi composition
- page chi assemble
- locale va dictionary tach rieng

---

## 7. Mau thao tac de lap lai

Neu lam lai mot task tuong tu, co the dung template sau:

### A. Read phase

```powershell
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'ui/ux.md'"
rtk proxy powershell -NoProfile -Command "Get-Content -Raw 'doc/clone/intro.html'"
rtk rg --files src
```

### B. Graph phase

- query `file_summary` tren page hien tai
- query `file_summary` tren shared UI foundation neu co

### C. Refactor phase

- tach atoms
- tach molecules
- tach widgets
- route chi assemble
- text dua qua i18n layer

### D. Verify phase

```powershell
rtk npm run test:run -- <target-test>
rtk npm run lint -- <changed-files>
rtk npm run build
```

---

## 8. Ket luan thao tac chuan

Trong project nay, cach dung hai cong cu dung nhat la:

- Dung `rtk` de van hanh shell theo local rule va giam output noise.
- Dung code review graph de lay context / review bo sung, nhung luon doc source that va luon verify bang test-lint-build.

Neu phai uu tien:

1. source code that
2. Next.js docs / local rules
3. targeted checks qua `rtk`
4. code review graph nhu layer bo sung

Do la cach lam on dinh nhat trong phien nay.
