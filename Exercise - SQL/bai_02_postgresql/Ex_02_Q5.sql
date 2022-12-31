-- Q5. Cho biết số giảng viên của khoa ‘CONG NGHE SINH HOC’

select count(*) as sogiangvien from tblkhoa khoa
join tblgiangvien gv on khoa.makhoa = gv.makhoa 
where khoa.tenkhoa = 'Cong nghe Sinh hoc'