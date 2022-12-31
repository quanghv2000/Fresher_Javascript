-- Q9. Cho biết mã số và tên của các đề tài do giảng viên ‘Tran son’ hướng dẫn

select dt.madt, dt.tendt from tblgiangvien gv
join tblhuongdan hd on hd.magv = gv.magv 
join tbldetai dt on dt.madt = hd.madt
where gv.hotengv = 'Tran Son'