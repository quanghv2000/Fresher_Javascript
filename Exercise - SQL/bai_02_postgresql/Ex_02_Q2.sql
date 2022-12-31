-- Q2. Đưa ra thông tin gồm mã số, họ tên và tên khoa của các giảng viên 
-- của khoa ‘DIA LY va QLTN’

select gv.magv, gv.hotengv, khoa.tenkhoa from tblgiangvien gv
join tblkhoa khoa on gv.makhoa = khoa.makhoa
where khoa.tenkhoa = 'Dia ly va QLTN'
