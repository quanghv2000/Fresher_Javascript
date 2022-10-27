-- Transaction:
-- Khi có 1 chuỗi công việc được thực thi => nếu 1 công việc bị lỗi
-- => Transaction giúp rollback (trở lại) trạng thái ban đầu.
-- => 1 transaction chỉ thành công khi cả chuổi công việc được hoàn thành

-- Xử lý Transaction
-- Trong SQL, có các lệnh sau được sử dụng để điều khiển Transaction:

-- COMMIT: để lưu các thay đổi.
-- ROLLBACK: để quay trở lại trạng thái trước khi có thay đổi.
-- SAVEPOINT: tạo các điểm (point) bên trong các nhóm Transaction để ROLLBACK, tức là để quay trở lại điểm trạng thái đó.
-- SET TRANSACTION: đặt một tên cho một Transaction.