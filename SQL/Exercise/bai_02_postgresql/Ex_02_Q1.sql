-- Q1. Đưa ra thông tin gồm mã số, họ tên và tên khoa của tất cả các giảng viên
select gv.magv, gv.hotengv, khoa.tenkhoa 
from tblgiangvien gv
join tblkhoa khoa on gv.makhoa = khoa.makhoa