-- Q16. Cho biết thông tin về các sinh viên thực tập tại quê nhà

select sv.masv, sv.hotensv, sv.quequan, dt.noithuctap 
from tblsinhvien sv
join tblhuongdan hd on hd.masv = sv.masv
join tbldetai dt on dt.madt = hd.madt
where sv.quequan = dt.noithuctap