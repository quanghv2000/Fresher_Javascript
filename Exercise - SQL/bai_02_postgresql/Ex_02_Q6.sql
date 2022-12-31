-- Q6. Cho biết thông tin về sinh viên không tham gia thực tập

-- 1
select * from tblsinhvien sv 
where sv.masv not in
(
	select sv.masv from tblhuongdan hd
	join tblsinhvien sv on sv.masv = hd.masv 
)

-- 2
select * from tblsinhvien sv 
where sv.masv not in
(
	select hd.masv from tblhuongdan hd
)

