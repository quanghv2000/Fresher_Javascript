-- Q11. Cho biết mã số, họ tên, tên khoa của các giảng viên hướng dẫn từ 3 sinh viên trở lên.

select gv.magv, gv.hotengv, gv.makhoa from tblhuongdan hd
join tblgiangvien gv on gv.magv = hd.magv
join tblkhoa khoa on khoa.makhoa = gv.makhoa
group by gv.magv, gv.hotengv
having count(hd.masv) >= 2 -- (>=3): db k có, để 2 để test