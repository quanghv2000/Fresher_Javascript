-- Q14. Đưa ra mã số, họ tên và điểm của các sinh viên khoa ‘DIALY và QLTN’

select sv.masv, sv.hotensv, hd.ketqua, khoa.tenkhoa from tblsinhvien sv
join tblhuongdan hd on hd.masv = sv.masv
join tblkhoa khoa on khoa.makhoa = sv.makhoa
where khoa.tenkhoa = 'Dia ly va QLTN' and hd.ketqua notnull