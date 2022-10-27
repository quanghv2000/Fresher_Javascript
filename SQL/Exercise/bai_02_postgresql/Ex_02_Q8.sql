-- Q8. Cho biết số điện thoại của khoa mà sinh viên có tên ‘Le van son’ đang theo học

select khoa.dienthoai from tblkhoa khoa
join tblsinhvien sv on khoa.makhoa = sv.makhoa
where sv.hotensv = 'Le Van Son'
