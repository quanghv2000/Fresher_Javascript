-- Q18. Đưa ra danh sách gồm mã số, họ tên các sinh viên có điểm thực tập bằng 0

select sv.masv, sv.hotensv, hd.ketqua
from tblhuongdan hd
join tblsinhvien sv on sv.masv = hd.masv
where hd.ketqua = 0