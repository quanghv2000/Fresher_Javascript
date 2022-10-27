-- Q4. Đưa ra danh sách gồm mã số, họ tên và tuổi của các sinh viên khoa ‘TOAN’

select sv.masv, sv.hotensv, (date_part('year', now()) - sv.namsinh) as tuoi, khoa.tenkhoa from tblkhoa khoa
join tblsinhvien sv on sv.makhoa = khoa.makhoa
where khoa.tenkhoa = 'Toan'