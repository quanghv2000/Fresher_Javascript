-- SQL CREATE INDEX Statement
-- The CREATE INDEX statement is used to create indexes in tables.

-- Indexes are used to retrieve (select) data from the database more quickly than otherwise. 
-- The users cannot see the indexes, they are just used to speed up searches/queries.

CREATE INDEX idx_lastname
ON Persons (LastName);

ALTER TABLE table_name
DROP INDEX index_name;

-- Đánh index để làm gì?
-- Khi ko có index truy vấn phải chạy qua tất cả các row của bảng
-- để so sánh và lấy ra dữ liệu (khi số lượng bản ghi lớn) - điều này sẽ tốn thời gian thực thi
-- => index sinh để giải quyết vấn đề trên (index trỏ tới địa chỉ dữ liệu trong 1 bảng).

-- index có thể tạo cho 1 hoặc nhiều column trong db. và thường được tạo mặc định cho primary key, foreign key.

-- Cấu trúc của index: Search Key: Data Reference
-- Search Key: chứa bản sao các giá trị của cột được tạo Index
-- Data Reference: chứa con trỏ trỏ đến địa chỉ của bản ghi có giá trị cột index tương ứng

-- Một số loại index
-- B-Tree:
-- Hash Index: Key - Value (nên sử dụng trong = & !=, <>) - ko nên >, <

-- Ưu điểm: 
-- Tăng tốc độ truy vấn

-- Nhược điểm 
-- Chậm tốc độ thêm, sửa, xóa dữ liệu