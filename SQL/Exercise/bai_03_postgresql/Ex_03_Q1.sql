-- Câu 1: Liệt kê MaDatPhong, MaDV, SoLuong của tất cả các dịch vụ có số lượng lớn hơn 3 và nhỏ hơn 10. (1 điểm)

select * from chi_tiet_su_dung_dv ctsdd 
where ctsdd.soluong > 3 and ctsdd.soluong < 10

create or replace function Q1() 
	returns table (
		madatphong int,
		madv int,
		soluong int
	)
as $$
begin
	return query
	select * from chi_tiet_su_dung_dv ctsdd
where ctsdd.soluong > 3 and ctsdd.soluong < 10;
end; $$

language 'plpgsql'

select * from Q1()

DROP FUNCTION Q1()

