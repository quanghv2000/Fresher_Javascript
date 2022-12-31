-- Q12. Cho biết mã số, tên đề tài của đề tài có kinh phí cao nhất

select dt.madt, dt.tendt from tbldetai dt
where dt.kinhphi = (
	select Max(dt.kinhphi) from tbldetai dt
)
