# 02 - Smart Patterns And Common Mistakes

File nay tong hop "meo engineering" ma ban nen tap nhin ra khi doc project.

## Pattern 1 - Boundary ro

Vi du:

- `app` lo route
- `widget` lo body page
- `shared/ui` lo component trinh bay

Neu boundary ro:

- sua de
- test de
- onboarding nhanh

## Pattern 2 - Config tap trung

`ROUTES` va dictionary la 2 config quan trong.

Loi ich:

- giam hardcode
- giam typo
- de doi URL/text

## Pattern 3 - Props thay vi import nguoc

`PageIntro` nhan text qua props thay vi tu di doc dictionary.

Y nghia:

- shared UI doc lap hon
- it phu thuoc hon

## Pattern 4 - Client chi o noi can thiet

`ResearchSidebar` can `usePathname` nen la client.

Nhung `page.tsx` va nhieu widget khac van la server-friendly.

Day la cach suy nghi tot:

- dung client khi can
- khong lam client tran lan

## Pattern 5 - Shell dung chung qua layout

Day la pattern rat dang hoc:

- thay vi copy sidebar vao 4 page
- dat no o `src/app/[lang]/(research)/layout.tsx`

## Loi thuong gap

- them page moi nhung dat sai layer
- import deep vao `ui/...`
- tu tao route string moi ma khong dua vao `ROUTES`
- them text truc tiep bang tieng Anh vao component
- sua type ma khong nghi file nao se bi anh huong

## Cach tu hoi truoc khi code

1. Cai nay la route, UI, interaction, hay domain data
2. Cai nay co can dung chung khong
3. Cai nay co can biet URL hien tai khong
4. Cai nay co can i18n khong
5. Cai nay co nen thanh shared component khong

## Huong mo rong

- Tu viet 1 checklist code review rieng cho project nay
- Tu ghi lai 10 pattern thong minh ban tim thay sau moi buoi doc code
