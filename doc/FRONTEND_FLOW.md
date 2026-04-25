# Tài liệu Luồng Xử Lý Frontend (Frontend Architecture & Flow)

Tài liệu này giải thích chi tiết cách ứng dụng vận hành, cấu trúc thư mục và các quy tắc lập trình đang được áp dụng trong dự án (Next.js 15, FSD, Atomic Design).

## 1. Kiến trúc Tổng thể (Architecture)

Dự án sử dụng **Feature-Sliced Design (FSD)** làm khung xương chính, chia code thành các lớp (layers) có trách nhiệm riêng biệt:

-   **`app/`**: Nơi cấu hình Routing, Layout, và Global Styles. Đây là điểm bắt đầu của ứng dụng.
-   **`widgets/`**: Các khối giao diện lớn, phức tạp được lắp ghép từ nhiều *Features* và *Entities*. Áp dụng mô hình **Component-as-a-Folder** (Ví dụ: `widgets/landing/ui/hero-section/`).
-   **`features/`**: Chứa logic tương tác của người dùng mang lại giá trị kinh doanh (Ví dụ: `auth` xử lý đăng nhập, `research-query` xử lý tìm kiếm khoa học).
-   **`entities/`**: Chứa logic liên quan đến thực thể dữ liệu (Ví dụ: `user`). Bao gồm API calls, state management cho thực thể đó.
-   **`shared/`**: Các tài nguyên dùng chung, không phụ thuộc vào business logic (Ví dụ: `UI Atoms`, `utils`, `i18n`).

## 2. Luồng Thực thi (Execution Flow)

### A. Luồng Routing & Internationalization (i18n)
1.  **Request**: Người dùng truy cập `/[lang]/page`.
2.  **Middleware**: Kiểm tra ngôn ngữ (`en`, `vi`). Nếu thiếu, tự động redirect về ngôn ngữ mặc định.
3.  **Layout (`src/app/[lang]/layout.tsx`)**: 
    -   Nhận `lang` từ params.
    -   Khởi tạo `Dictionary` (ngôn ngữ) thông qua `shared/i18n`.
    -   Cung cấp context cho toàn bộ ứng dụng.
4.  **Page (`src/app/[lang]/page.tsx`)**: Gọi các `Widgets` để hiển thị nội dung.

### B. Luồng Render Component (Atomic Design trong FSD)
Chúng ta áp dụng **Atomic Design** bên trong lớp `shared/ui` và các lớp khác để quản lý độ phức tạp:

1.  **Atoms (`shared/ui/atoms`)**: Các thành phần nhỏ nhất (Button, Input, Typography). Không chứa logic nghiệp vụ.
2.  **Molecules (`shared/ui/molecules`)**: Kết hợp các Atoms (Ví dụ: `SearchField` = `Input` + `Icon`).
3.  **Organisms (Nằm trong `entities` hoặc `features`)**: Các khối lớn có gắn logic (Ví dụ: `LoginForm` trong `features/auth`).
4.  **Templates/Widgets (Folder-based)**: Các khối lớn lắp ghép page. Mỗi widget được chia thành thư mục riêng (Ví dụ: `hero-section/`) chứa logic và UI riêng biệt, đóng gói qua `index.ts`.

## 3. Luồng Dữ liệu (Data Flow)

Ứng dụng phân tách rõ ràng giữa **Server State** và **Client State**:

### Server State (TanStack Query)
-   **Vị trí**: Nằm chủ yếu ở lớp `entities/[entity]/api`.
-   **Flow**: 
    1.  Component gọi `useQuery` hoặc `useSuspenseQuery`.
    2.  `api-client` gửi request lên Backend. Dữ liệu được cache và quản lý bởi TanStack Query.

### Client State (Zustand)
-   **Vị trí**: Nằm ở lớp `shared/model` hoặc `features/[feature]/model`.
-   **Flow**: Lưu trữ các trạng thái UI toàn cục (ví dụ: thông tin user hiện tại sau khi login).

### Form Validation (Zod) & React 19 Actions
-   Sử dụng **Server Actions** trong `features` để xử lý form.
-   Dữ liệu được validate qua **Zod Schemas** trước khi xử lý.

## 4. Quy tắc "Vàng" (Golden Rules) - Cấp độ Professional

1.  **Public API (Encapsulation)**: Mọi module/slice (trong `features`, `entities`, `widgets`) và các thư mục con của widget **BẮT BUỘC** phải có file `index.ts`. Các tầng trên chỉ được phép import tài nguyên thông qua file này. 
    - *Lợi ích*: Cho phép refactor logic bên trong (ví dụ: chia nhỏ file trong `hero-section/`) mà không làm hỏng các nơi khác.
2.  **Một chiều (One-way direction)**: Layer cấp cao (`widgets`) có thể import từ layer cấp thấp (`features`, `entities`, `shared`), nhưng tuyệt đối **KHÔNG** được import ngược lại hoặc import chéo giữa các slice cùng cấp.
3.  **Tối ưu Interaction to Next Paint (INP)**: Tại tầng `features`, các hàm xử lý logic nặng (>50ms) phải sử dụng kỹ thuật **Yield to the main thread** (ví dụ: `scheduler.yield()`) để đảm bảo chỉ số INP luôn < 200ms.
4.  **React 19 Actions & Optimistic UI**: 
    - Ưu tiên sử dụng **Server Actions** cho các thao tác thay đổi dữ liệu.
    - Kết hợp hook `useOptimistic` để cập nhật giao diện ngay lập tức mang lại trải nghiệm không độ trễ.
5.  **Shared là "Pure"**: Các component trong `shared/ui` không được chứa logic nghiệp vụ hoặc gọi API.
6.  **Surgical Update**: Khi sửa đổi, chỉ tập trung vào đúng layer có trách nhiệm cao nhất (Ví dụ: Sửa logic validate query thì vào `features/research-query`, sửa UI button thì vào `shared/ui/atoms`).

## 5. Kết luận

Luồng frontend này đạt cấp độ **Professional**, đảm bảo tính bền vững và khả năng mở rộng cực cao thông qua việc tuân thủ nghiêm ngặt FSD và Public API.

---
*Tài liệu này được cập nhật tự động bởi Gemini CLI vào ngày 25-04-2026.*
