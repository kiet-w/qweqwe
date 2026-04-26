# Frontend Learning Guide

Bo tai lieu nay duoc viet theo dung code dang co trong project nay. Muc tieu la giup ban hoc frontend theo cach "doc code that" thay vi hoc ly thuyet roi moi tu map vao du an.

## Ban se hoc duoc gi

- Next.js App Router chay theo luong nao
- React + TypeScript syntax trong project that co y nghia gi
- FSD (`app / widgets / features / entities / shared`) dung de lam gi
- Tailwind va shared UI duoc to chuc nhu the nao
- i18n, `ROUTES`, Supabase client/server, va type domain ket noi voi nhau ra sao
- Cach them page moi, widget moi, feature moi ma khong pha kien truc
- Cach doc mot dong code va du doan no anh huong toi nhung file nao khac

## Nen doc theo thu tu nay

1. `00-start-here`
2. `01-app-router-flow`
3. `02-fsd-architecture`
4. `03-react-ts-syntax`
5. `04-ui-styling-system`
6. `05-data-and-domain-flow`
7. `06-quality-and-optimization`
8. `07-extension-guides`
9. `08-project-improvements`

## Cach dung bo tai lieu nay

- Moi file deu bam vao file that trong repo.
- Moi file deu co phan "Y nghia", "Tac dong", "Tips", "Huong mo rong".
- Folder `08-project-improvements` la cac case study refactor that da ap dung tren chinh codebase nay.
- Khi doc, mo song song file `.md` va file code duoc nhac den.
- Neu gap tu moi, dung dung lai. Doc het luong truoc, roi quay lai syntax.

## File code nen mo song song tu dau

- `src/app/layout.tsx`
- `src/app/[lang]/layout.tsx`
- `src/app/[lang]/page.tsx`
- `src/app/[lang]/(research)/layout.tsx`
- `src/widgets/landing/ui/landing-page.tsx`
- `src/widgets/login/ui/login-page.tsx`
- `src/widgets/research-sidebar/ui/research-sidebar.tsx`
- `src/shared/ui/atoms/button.tsx`
- `src/shared/i18n/get-dictionary.ts`
- `src/shared/config/routes.ts`

## Goc nhin quan trong

Project nay khong chi day ban "viet JSX". No day ban:

- cach chia layer
- cach giu code de doc
- cach giam hardcode
- cach dua text vao dictionary thay vi viet chet trong component
- cach tach component trinh bay va component biet route/business

Neu ban doc het bo nay, ban se khong con nhin project nhu mot dong JSX dai nua. Ban se thay duoc:

- file nao la entry
- file nao la shell
- file nao la presentation
- file nao duoc phep biet route
- file nao chi nen nhan props va render
