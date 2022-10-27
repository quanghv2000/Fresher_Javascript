-- Q7. Đưa ra mã khoa, tên khoa và số giảng viên của mỗi khoa

select khoa.makhoa, khoa.tenkhoa, count(khoa.makhoa) as sogiangvien from tblkhoa khoa
join tblgiangvien gv on khoa.makhoa = gv.makhoa
group by khoa.makhoa, khoa.tenkhoa