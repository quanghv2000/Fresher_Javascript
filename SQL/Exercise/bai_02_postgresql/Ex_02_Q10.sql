-- Q10. Cho biết tên đề tài không có sinh viên nào thực tập

select * from tbldetai dt
where dt.madt not in (
	select distinct (hd.madt) from tblhuongdan hd 
)