-- Q3. Cho biết số sinh viên của khoa ‘CONG NGHE SINH HOC’

select count(*) from tblkhoa khoa
join tblsinhvien sv on sv.makhoa = khoa.makhoa
where khoa.tenkhoa = 'Cong nghe Sinh hoc'