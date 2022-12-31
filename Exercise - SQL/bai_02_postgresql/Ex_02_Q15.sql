-- Q15. Đưa ra tên khoa, số lượng sinh viên của mỗi khoa

select khoa.tenkhoa, count(sv.masv) as soluongsinhvien 
from tblkhoa khoa
join tblsinhvien sv on sv.makhoa = khoa.makhoa
group by khoa.tenkhoa