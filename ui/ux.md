# UI/UX Priorities

Muc tieu cua tai lieu nay la giu phan UI/UX chat che theo dung ranh gioi logic. UI phai nhat quan, tai su dung duoc, de test, va khong chen logic nghiep vu vao sai tang.

## 1. Folder uu tien so 1: `src/shared/ui/`

Day la nen mong cua toan bo giao dien. Theo tu duy Atomic Design, tang nay duoc xay tu nho den lon va chi phuc vu hien thi.

### `atoms/`

Chua cac thanh phan co ban nhat:

- `Button`
- `Input`
- `Icon`
- `Typography`

Day cung la noi dinh nghia cac thuoc tinh thiet ke cot loi:

- mau sac
- spacing
- border-radius
- typographic scale
- shadow
- transition

Quy tac:

- Atom chi nhan `props` va render UI.
- Khong fetch data.
- Khong chua business rules.
- Khong doc state cua feature neu khong duoc truyen vao tu ben ngoai.
- Khong sinh ra hanh vi dac thu domain.

### `molecules/`

Ket hop nhieu `atoms` thanh cum chuc nang nho:

- `FormField` = `Label + Input + ErrorMessage`
- `SearchBar`
- `SectionHeader`
- `InlineAction`

Quy tac:

- Molecule duoc phep gom hanh vi giao dien nho.
- Van khong chua logic nghiep vu.
- Duoc phep xu ly presentation state don gian nhu `disabled`, `focused`, `invalid`, `loading`.
- Moi quyet dinh domain phai de o `features`, `entities`, hoac tang cao hon.

### Vi sao `src/shared/ui/` quan trong nhat cho UI/UX?

- Tinh nhat quan: Moi button, input, typography, va feedback state phai dong nhat tren toan app.
- Tai su dung cao: Thiet ke va code mot lan, cac tang tren chi lap ghep lai.
- Dumb components: Component chi tap trung vao cam giac su dung, visual quality, va nhan `props`.
- De kiem soat chat luong: A11y, spacing, contrast, motion, va responsive duoc xu ly ngay tu goc.

## 2. Folder uu tien so 2: `src/widgets/`

Sau khi co he thong UI co ban, uu tien tiep theo la `src/widgets/` de xu ly bo cuc va trai nghiem tong the.

Day la noi lap ghep thanh cac khoi giao dien lon nhu:

- `Header`
- `Footer`
- `Sidebar`
- `ProductGrid`
- `Hero`
- `SearchPanel`

Vai tro cua tang nay:

- To chuc layout.
- Dinh hinh user flow.
- Kiem soat nhip dieu thong tin tren man hinh.
- Tao ra cac khoi UI lon de page co the tai su dung.

Quy tac logic:

- Widget co the nhan data va callbacks tu tang tren.
- Widget khong tu y om business logic phuc tap neu logic do thuoc `features` hoac `entities`.
- Widget uu tien composition, khong uu tien stateful orchestration.
- Neu can state nghiep vu, tach logic ra hook hoac feature-level container, widget chi render.

## 3. Cac luu y UI/UX phai xu ly ngay tai hai folder nay

### Accessibility - a11y

Phai tich hop ngay tu `shared/ui`, khong de sua sau.

Bat buoc:

- Dung Semantic HTML dung nghia.
- Dung the `button` cho hanh dong, khong dung `div`.
- Dung `label` gan voi `input`.
- Ho tro keyboard navigation.
- Co `focus-visible` ro rang.
- Dam bao color contrast dat chuan.
- Dung `aria-*` chi khi semantic HTML chua du.

Nguyen tac:

- A11y la mot phan cua logic giao dien, khong phai phan trang tri.
- Neu component khong accessible, coi nhu chua hoan thanh.

### Core Web Vitals

Can xu ly som de tranh vo layout va trai nghiem kem.

Bat buoc:

- Tranh CLS bang cach khai bao kich thuoc ro rang cho media.
- Dung flow font hop ly, uu tien `next/font`.
- Khong de component loading lam xao tron bo cuc.
- Skeleton phai gan voi layout that.
- Giam CSS va JS du thua trong UI primitives.

Nguyen tac:

- UI dep nhung gay layout shift la UI hong.
- Performance khong duoc tach roi khoi UX.

### Trang thai giao dien

Moi component can duoc tinh den day du trang thai.

Bat buoc:

- `loading`
- `empty`
- `error`
- `disabled`
- `success` neu co hanh dong xac nhan

Vi tri ap dung:

- `entities/ui`
- `widgets/ui`
- `features/ui` neu component phuc vu interaction ro rang

Nguyen tac:

- Khong thiet ke chi cho happy path.
- Trang thai giao dien la logic bat buoc, khong phai phan phu.

### i18n la mot phan cua UX, khong phai phan them vao sau

Neu project co da ngon ngu, i18n phai duoc tinh ngay tu luc thiet ke component.

Bat buoc:

- Khong hard-code text trong `shared/ui`.
- Text phai di qua dictionary hoac translation layer.
- Widget va page nhan text qua `props` hoac locale-aware data.
- Khong gop noi dung da dich va business logic vao chung mot component.
- Can tinh den do dai text khac nhau giua cac ngon ngu trong layout.
- Button, form label, empty state, error state, va aria-label deu phai localize.

Nguyen tac:

- i18n anh huong truc tiep den spacing, line-break, CTA clarity, va accessibility.
- Neu UI chi dung voi mot ngon ngu, UX chua dat chuan.

## 4. Nguyen tac "strict about logic"

Day la quy tac bat buoc khi xay dung UI/UX:

- `shared/ui` chi chua presentation logic.
- `widgets` chi chua composition logic.
- Business logic khong duoc dat trong `atoms` hoac `molecules`.
- Domain rules khong duoc an trong event handlers cua UI kit.
- Component nao kho test vi dinh chat logic nghiep vu vao UI la component sai tang.

### Phan tach trach nhiem

- `shared/ui`: render, style, variants, accessibility, visual states
- `shared/i18n`: locale config, dictionaries, translation loading
- `widgets`: layout, composition, page sections, flow blocks
- `features`: user interactions co y nghia nghiep vu
- `entities`: domain representation va entity-specific UI
- `pages/app`: route-level assembly

## 5. Thu tu thuc hien de dung

1. Xay `tokens` va `atoms` trong `src/shared/ui/`.
2. Tao `molecules` de gom cac primitive pho bien.
3. Lap ghep thanh `widgets` de kiem tra layout va user flow.
4. Bo sung state `loading`, `empty`, `error`.
5. Dien translation keys va locale flow truoc khi hard-code noi dung vao page.
6. Moi dua logic nghiep vu vao `features` va `entities`.
7. Tai su dung widget o `pages` hoac `app`.

## 6. Tieu chi review

Truoc khi merge bat ky UI nao, can tu check:

- Co tai su dung duoc tu `shared/ui` khong?
- Co lap lai button, input, typography khong?
- Co chen domain logic vao component presentation khong?
- Co hard-code text thay vi di qua i18n flow khong?
- Co du keyboard, focus, label, contrast khong?
- Co du loading, empty, error khong?
- Co gay CLS hoac flash layout khong?
- Layout co vo khi text dai hon o locale khac khong?
- Co dung widget de xu ly layout thay vi nhai markup o page khong?

Neu mot component vua khoi tao da vi pham cac diem tren, phai sua cau truc truoc khi them tiep logic.
