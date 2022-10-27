-- Trigger trong SQL là một đoạn procedure code, chỉ được vận hành khi có một sự kiện xảy ra. 
-- Có nhiều loại sự kiện khác nhau để kích hoạt trigger trong SQL. Có thể kể đến như việc chèn các hàng trong bảng, 
-- thay đổi cấu trúc bảng hoặc thậm chí người dùng đăng nhập vào một phiên bản SQL Server.

-- 1. Người dùng không thể thực hiện thủ công các trigger.
-- 2. Không có cơ hội cho trigger nhận thông số.
-- 3. Không thể cam kết hoặc khôi phục một transaction bên trong trigger.

-- Trigger dùng để làm gì?
-- 1. Trigger được sử dụng để kiểm tra ràng buộc (check constraints) 
-- trên nhiều quan hệ (nhiều bảng/table) hoặc trên nhiều dòng (nhiều record) của bảng.
-- 2. Bên cạnh đó, việc sử dụng Trigger để chương trình có những hàm chạy ngầm nhằm phục vụ 
-- những trường hợp hữu hạn và thường không sử dụng cho mục đích kinh doanh hoặc giao dịch.

-- CREATE TRIGGER trigger_name
-- {BEFORE | AFTER} {INSERT | UPDATE| DELETE }
-- ON table_name FOR EACH ROW
-- trigger_body;