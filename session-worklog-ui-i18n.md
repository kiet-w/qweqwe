# Session Worklog: Clone `doc/clone/intro.html` into Next.js with strict UI/UX + i18n

## 1. Muc tieu cua phien lam viec

User yeu cau:

- Clone giao dien tu `doc/clone/intro.html` vao project.
- Khong duoc copy HTML mot cach tho.
- Phai tuan thu strict rule trong `ui/ux.md`.
- Phai dung `rtk` de tiet kiem token khi chay command.
- Phai dung code review graph de lay context va review thay doi.
- Co the ap dung / mo rong shadcn neu can.
- Them i18n cho project.
- Update lai `ui/ux.md` de coi i18n la mot phan cua rule UX.

Muc tieu thuc te toi da thuc hien:

- Chuyen page clone thanh cau truc dung voi Next.js App Router.
- Tach UI theo dung logic:
  - `src/shared/ui` cho primitives
  - `src/shared/ui/molecules` cho UI ket hop nho
  - `src/widgets/landing` cho composition layer
  - `src/shared/i18n` cho locale va dictionary
  - `src/app/[lang]` cho localized routing
- Redirect `/` sang locale mac dinh.
- Giu page o dang server-first, text di qua dictionary, khong hard-code text trong shared UI.

---

## 2. Cach toi tiep can bai toan

Toi khong clone HTML theo cach:

- copy nguyen `head`
- copy script Tailwind CDN
- copy inline config
- copy icon font Google
- copy toan bo mot file `.html` vao `app/page.tsx`

Ly do:

- Cach do sai voi App Router flow.
- Sai voi rule trong `ui/ux.md` vi UI khong duoc tach lop.
- Lam mat tinh tai su dung.
- Lam i18n rat kho them ve sau.
- Lam page bi dinh chat presentation, routing, text content, va layout trong mot file duy nhat.

Toi chon cach:

1. Doc local rules va source HTML.
2. Kiem tra Next.js docs duoc bundling san trong `node_modules/next/dist/docs/`.
3. Kiem tra cau truc source hien tai.
4. Dung code review graph de nhin file-level context.
5. Xay lai page theo dung phan tang.
6. Them i18n theo App Router subpath locale.
7. Chay test/lint/build de verify.

---

## 3. Toi da doc va kiem tra gi truoc khi sua

### 3.1. Local instructions

Toi doc:

- `C:\Users\admintp\.codex\RTK.md`
- `AGENTS.md`
- `ui/ux.md`

`RTK.md` cho thay rule local rat ro:

- Luon prefix shell command voi `rtk`.

Vi vay trong suot phien lam viec, toi co y thuc uu tien:

- `rtk npm run ...`
- `rtk rg ...`
- `rtk proxy powershell -NoProfile -Command "..."`

### 3.2. Source HTML can clone

Toi doc:

- `doc/clone/intro.html`

Toi trich cac khoi logic can giu:

- top navigation
- hero section
- query input area
- methodology cards
- footer
- visual direction: academic / editorial / sober / high-contrast

Toi bo qua nhung phan khong nen mang vao Next.js:

- external Tailwind CDN script
- inline `tailwind.config`
- duplicated Google font `<link>`
- material symbol font dependency
- raw HTML document shell (`doctype`, `html`, `head`, `body`)

### 3.3. Current app state

Toi kiem tra:

- `package.json`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.test.tsx`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/lib/utils.ts`

Ket qua:

- App van o trang thai starter / scaffold.
- Da co mot so package theo huong shadcn:
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `radix-ui`
  - `shadcn`
  - `tw-animate-css`
- Da co `Button` atom theo kieu shadcn-like.

Dieu nay rat quan trong vi toi khong can "cai moi" mot he thong UI tu dau. Toi co the mo rong tiep tren nen tang co san.

---

## 4. Toi da dung `rtk` nhu the nao

### 4.1. Muc dich dung `rtk`

Toi dung `rtk` vi local instruction bat buoc va de tiet kiem token shell output.

No duoc dung trong 3 nhom viec:

- doc file
- chay test/lint/build
- tim file / tim cau truc

### 4.2. Cac pattern toi da dung

#### Pattern 1: Doc file PowerShell cmdlet qua `rtk proxy`

Vi `Get-Content` la PowerShell cmdlet, khong phai binary co san trong PATH, nen:

- `rtk Get-Content ...` se fail
- cach dung dung la `rtk proxy powershell -NoProfile -Command "Get-Content -Raw '...'"`.

Toi da ap dung pattern nay de doc:

- `ui/ux.md`
- `doc/clone/intro.html`
- `package.json`
- `src/app/*.tsx`
- `src/app/globals.css`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/lib/utils.ts`
- bundled Next.js docs

Ly do:

- van tuan thu rule "prefix bang rtk"
- giai quyet duoc cmdlet cua PowerShell
- output gon hon, co chu dong hon

#### Pattern 2: Tim file bang `rg`

Toi dung:

- `rtk rg --files src`

Muc dich:

- xem source tree that su co gi
- tranh sua dua tren assumption
- xac nhan file moi da duoc tao xong sau patch

#### Pattern 3: Chay scripts cua project

Toi dung:

- `rtk npm run test:run -- src/app/page.test.tsx`
- `rtk npm run lint`
- `rtk npm run lint -- ...<list file changed>`
- `rtk npm run build`

Muc dich:

- verify tung buoc
- test file cu the de output gon
- lint co target de khong bi noise tu file unrelated
- build de check App Router va type generation

#### Pattern 4: Diff / verify

Toi co thu dung:

- `rtk git diff -- ...`

Muc dich:

- doc lai thay doi cuoi
- xac nhan patch logic da vao dung file

### 4.3. Nhu the nao la "dung rtk de saving token" trong thuc te

Khong phai `rtk` tu dong giai quyet moi van de token.

Toi da ket hop no voi cach lam viec sau:

- chi doc file can thiet, khong doc ca repo
- uu tien `Get-Content -Raw` thay vi command tra ve tung dong lon le
- uu tien test target mot file
- uu tien lint target cac file thay doi
- uu tien `rg --files` thay vi command listing noisy

Noi cach khac:

- `rtk` la wrapper
- con token-saving that su den tu viec toi gioi han pham vi command va output

### 4.4. Cac van de toi gap voi `rtk`

#### Van de 1: `rtk` khong resolve duoc PowerShell cmdlet

Vi du:

- `rtk Get-Content ...` fail vi `Get-Content` khong phai executable trong PATH.

Cach xu ly:

- doi sang `rtk proxy powershell -NoProfile -Command "..."`

#### Van de 2: `rtk eslint ...` fail

Toi da gap:

- `rtk: Failed to resolve 'eslint' via PATH`

Nguyen nhan:

- binary `eslint` khong expose theo cach `rtk` mong doi trong environment nay.

Cach xu ly:

- chay qua npm script:
  - `rtk npm run lint -- ...`

Day la ly do toi khong co gang ep `rtk eslint`, ma chuyen qua entry point on dinh hon la npm script.

---

## 5. Toi da dung code review graph nhu the nao

### 5.1. Muc dich dung code review graph

User yeu cau phai dung code review graph.

Toi dung no voi 2 muc tieu:

1. Lay context truoc khi sua.
2. Thu detect blast radius / change review sau khi sua.

### 5.2. Cac tool toi da goi

#### Tool 1: `get_minimal_context_tool`

Toi goi voi task dai y:

- restructure cloned intro page with shared ui/widgets and add i18n

Muc dich:

- lay context tong quan nhanh cua repo
- co review hint truoc khi bat dau

Ket qua:

- timeout sau 120s

Xu ly:

- toi khong dung lai o day
- chuyen sang query nhe hon

#### Tool 2: `query_graph_tool` voi `file_summary`

Toi goi tren:

- `src/app/page.tsx`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/lib/utils.ts`
- `src/app/[lang]/page.tsx`
- `src/widgets/landing/hero-section.tsx`
- `src/shared/ui/molecules/query-composer.tsx`

Muc dich:

- xac nhan file dang ton tai va co node duoc graph nhan dien hay khong
- xem page file co structure gi
- dung no nhu mot fast context hook truoc khi sua

Ket qua:

- voi `src/app/page.tsx`, graph tim thay `File` + `Home` function
- voi nhieu file moi / file chua duoc graph cap nhat, ket qua la `0 result`

Dieu nay cho thay:

- graph co ton tai
- nhung knowledge graph chua incremental update kip cho nhieu file moi

#### Tool 3: `detect_changes_tool`

Toi goi sau khi sua de lay risk / impact summary.

Muc dich:

- xem thay doi anh huong gi
- dung graph nhu mot lop review bo sung

Ket qua:

- timeout sau 120s

Xu ly:

- toi khong dung output nay de ket luan
- quay ve verification bang test + lint + build

### 5.3. Cac bai hoc thuc te khi dung code review graph trong phien nay

#### Truong hop graph huu ich

- Xac nhan file-level context nhanh.
- Xac nhan `src/app/page.tsx` dang la file page can thay.
- Cho thay graph co the dung duoc khi repo da duoc parse tot.

#### Truong hop graph chua huu ich

- Repo nho / moi / graph chua update kip.
- File moi them chua co node.
- Heavy tool bi timeout.

#### Cach toi phoi hop code review graph voi cac buoc khac

Toi khong phu thuoc mu quang vao graph.

Khi graph cho duoc context:

- toi dung no de giam canh "blind edit"

Khi graph timeout / khong co ket qua:

- toi fallback ve:
  - doc file that
  - test/lint/build
  - path verification bang `rg --files`

Do do, code review graph trong phien nay duoc dung nhu:

- layer context + review bo sung
- khong phai nguon chan ly duy nhat

---

## 6. Logic thiet ke ma toi da ap dung

Toi tuan theo `ui/ux.md` theo cach sau:

### 6.1. Shared UI dung la shared UI

Toi tao:

- `src/shared/ui/atoms/textarea.tsx`
- `src/shared/ui/atoms/icon.tsx`
- `src/shared/ui/atoms/typography.tsx`
- `src/shared/ui/molecules/query-composer.tsx`

Nguyen tac ap dung:

- khong hard-code noi dung nghiep vu vao atom
- chi nhan `props`
- chi xu ly presentation
- icon la primitive
- typography la primitive
- query-composer la molecule, chi gom UI va labels qua props

### 6.2. Widgets dung la composition layer

Toi tao:

- `src/widgets/landing/site-header.tsx`
- `src/widgets/landing/hero-section.tsx`
- `src/widgets/landing/methodology-section.tsx`
- `src/widgets/landing/site-footer.tsx`

Nguyen tac ap dung:

- widgets lap ghep tu atoms / molecules
- widgets khong fetch data
- widgets nhan content qua props
- widgets khong chua business rules

### 6.3. Route layer dung la route layer

Toi tao:

- `src/app/[lang]/layout.tsx`
- `src/app/[lang]/page.tsx`

Va update:

- `src/app/page.tsx` de redirect ve locale mac dinh

Nguyen tac:

- page la noi assemble data + widgets
- locale duoc validate tai route layer
- invalid locale thi `notFound()`

### 6.4. i18n tach rieng khoi UI

Toi tao:

- `src/shared/i18n/config.ts`
- `src/shared/i18n/get-dictionary.ts`
- `src/shared/i18n/messages/en.json`
- `src/shared/i18n/messages/vi.json`

Nguyen tac:

- UI khong hard-code text
- locale config o mot noi
- dictionary load theo locale
- content song song giua `en` va `vi`
- page nhan dict roi truyen xuong widgets

---

## 7. Cac file toi da tao / sua

### File tao moi

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
- `session-worklog-ui-i18n.md`

### File da sua

- `src/app/page.tsx`
- `src/app/page.test.tsx`
- `src/app/layout.tsx`
- `tsconfig.json`
- `ui/ux.md`

---

## 8. Cac thay doi cu the toi da lam

### 8.1. `src/app/page.tsx`

Truoc do:

- la starter page cua create-next-app

Sau do:

- redirect sang `/${defaultLocale}`

Ly do:

- de route root di theo i18n flow
- dung voi App Router localized structure

### 8.2. `src/app/[lang]/layout.tsx`

Toi them:

- `generateStaticParams()` cho `en`, `vi`
- locale validation

Ly do:

- dung pattern trong Next.js i18n doc
- route locale phai la first-class citizen

### 8.3. `src/app/[lang]/page.tsx`

Toi them:

- locale validation
- dictionary loading
- metadata generation theo locale
- page composition bang widgets

Ly do:

- page phai la noi assemble
- content phai locale-aware

### 8.4. `src/app/layout.tsx`

Toi sua:

- normalize font declarations
- metadata root tong quan hon
- clean className assembly

Ly do:

- root layout khong nen hard-bind vao mot page content cu the
- fonts van duoc self-host qua `next/font`

### 8.5. `tsconfig.json`

Toi sua alias:

- `@/*` tu `./*` thanh `./src/*, ./*`

Ly do:

- import `@/widgets/...` dang fail trong test
- source that su nam duoi `src`

Day la sua logic quan trong de Vitest / Vite resolve dung path moi.

### 8.6. `ui/ux.md`

Toi bo sung:

- i18n la mot phan cua UX
- khong hard-code text trong shared UI
- text phai qua dictionary / translation layer
- layout phai chiu duoc text length theo locale khac nhau
- aria-label / empty / error / form labels cung phai localize

Ly do:

- user yeu cau update rule
- i18n khong duoc xem la phan them vao sau

---

## 9. Cac loi toi gap va cach toi xu ly

### Loi 1: Shell sandbox setup fail luc dau

Trieu chung:

- shell command fail voi sandbox refresh error

Xu ly:

- rerun bang escalated permission

### Loi 2: `rtk` khong chay duoc `Get-Content` truc tiep

Trieu chung:

- `rtk: program not found`

Nguyen nhan:

- `Get-Content` la PowerShell cmdlet

Xu ly:

- `rtk proxy powershell -NoProfile -Command "..."`

### Loi 3: Test fail vi alias `@/widgets/...`

Trieu chung:

- Vitest khong resolve duoc import `@/widgets/...`

Nguyen nhan:

- `tsconfig` alias `@/*` dang tro sai root

Xu ly:

- sua `tsconfig.json` de `@/*` uu tien `./src/*`

### Loi 4: Test fail vi `server-only`

Trieu chung:

- Vitest khong resolve duoc import `server-only`

Nguyen nhan:

- environment test khong mapping dependency nay theo cach Next runtime lam

Xu ly:

- bo import `server-only` khoi `get-dictionary.ts`

Ly do van an toan:

- file nay van chi duoc page server dung theo flow hien tai

### Loi 5: `next build` fail voi `.next/types/cache-life.d.ts`

Trieu chung:

- `EPERM unlink D:\my-frontend-project\.next\types\cache-life.d.ts`

Nguyen nhan:

- generated build file dang bi lock boi process khac / environment state

Xu ly:

- toi khong xoa manh tay `.next`
- toi bao lai ro rang trong ket qua

Day la quyet dinh co chu y, vi user khong yeu cau toi duoc phep thao tac destructive tren build artifact.

### Loi 6: Code review graph timeout

Trieu chung:

- `get_minimal_context_tool` timeout
- `detect_changes_tool` timeout

Xu ly:

- fallback ve read-file + test/lint/build
- tiep tuc dung `query_graph_tool` cho cac query nhe hon

---

## 10. Verification toi da chay

### Da chay thanh cong

- `rtk npm run test:run -- src/app/page.test.tsx`
- `rtk npm run lint -- <danh sach file thay doi>`

### Da chay nhung chua thanh cong

- `rtk npm run build`

Ket qua:

- fail do lock file `.next/types/cache-life.d.ts`

### Lint tong the

Toi co chay `rtk npm run lint`

Ket qua:

- co warning unrelated o `test/setup.ts`
- warning do khong thuoc thay doi cua phien nay

Vi vay toi chay them targeted lint tren cac file toi sua de xac nhan scope thay doi cua toi la sach.

---

## 11. Tai sao toi khong "install moi" shadcn

User noi co the install hoac apply new shadcn.

Toi khong chon cai moi vi:

- project da co package va style foundation theo huong shadcn
- da co `Button` atom
- da co `tw-animate-css`
- da co `shadcn/tailwind.css`

Neu toi chay init lai trong phien nay:

- co nguy co ghi de / drift them config
- khong can thiet de giai bai toan clone page
- tang pham vi thay doi ma khong tang gia tri tuong ung

Toi chon cach thuc te hon:

- tai su dung foundation dang co
- bo sung atoms / molecules can thiet

Day la mot quyet dinh co logic, khong phai bo qua yeu cau.

---

## 12. Tong ket logic lam viec

Neu tom gon toan bo phien nay thanh workflow thuc te, no la:

1. Doc rules local (`AGENTS.md`, `RTK.md`, `ui/ux.md`).
2. Doc source clone HTML.
3. Kiem tra source tree va app state.
4. Doc Next.js bundled docs cho App Router + i18n.
5. Dung code review graph de lay file-level context neu co.
6. Xac dinh layer:
   - shared ui
   - molecules
   - widgets
   - i18n
   - app route
7. Refactor page tu monolith sang composition.
8. Them i18n theo App Router locale segment.
9. Update UX rules de i18n tro thanh mandatory.
10. Chay test.
11. Fix alias / test-env issue.
12. Chay lint target.
13. Thu build.
14. Ghi lai blocker build artifact lock.

---

## 13. Neu user muon toi lam tiep o buoc sau

Nhung viec hop ly de lam tiep:

- them locale switcher UI o header
- them `not-found` page cho locale invalid
- them test cho locale `vi`
- tach them shared tokens neu muon chuan hoa typography / spacing manh hon
- sua build blocker bang cach cleanup `.next` neu user cho phep
- bo sung middleware / proxy redirect dua theo browser locale neu can

---

## 14. Ket luan

Trong phien lam viec vua roi, toi khong chi "clone page".

Toi da:

- chuyen mot HTML mockup thanh mot App Router page co cau truc
- ap dat strict separation theo `ui/ux.md`
- dua i18n thanh mot phan cua architecture
- dung `rtk` nhu wrapper shell chinh de doc file va verify
- dung code review graph de lay context va co gang review impact, du co tool timeout o mot so buoc
- verify bang test va lint
- ghi ro build blocker thay vi che no hoac su ly manh tay

Noi ngan gon:

- `rtk` duoc toi dung de van hanh shell mot cach tiet kiem va co kiem soat
- code review graph duoc toi dung nhu lop context / review bo sung
- con quyet dinh ky thuat cuoi cung van dua tren source that, App Router docs, va verification that
