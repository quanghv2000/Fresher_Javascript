-- Q17. Hãy cho biết thông tin về những sinh viên chưa có điểm thực tập

select sv.masv, sv.hotensv, hd.ketqua
from tblhuongdan hd
join tblsinhvien sv on sv.masv = hd.masv
where hd.ketqua is null