--  Q13. Cho biết mã số và tên các đề tài có nhiều hơn 2 sinh viên tham gia thực tập

select dt.madt, dt.tendt
from tblhuongdan hd
join tbldetai dt on dt.madt = hd.madt
group by dt.madt, dt.tendt
having count(hd.masv) > 2