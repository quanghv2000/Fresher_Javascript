-- Câu 9: Hiển thị MaKH, TenKH, DiaChi, SoDT của những khách hàng đã từng đặt phòng karaoke có địa chỉ ở “Hoa xuan”. (1 điểm)

select kh.makh, kh.tenkh, kh.diachi, kh.sodt
from khach_hang kh
join dat_phong dp on dp.makh = kh.makh
group by kh.makh
having kh.diachi = 'HOA XUAN'

create or replace function Q9() 
	returns table (
		makh int,
		tenkh varchar,
		diachi varchar,
		sodt bpchar
	)
as $$
begin
	return query
	select kh.makh, kh.tenkh, kh.diachi, kh.sodt
	from khach_hang kh
	join dat_phong dp on dp.makh = kh.makh
	group by kh.makh
	having kh.diachi = 'HOA XUAN';
end; $$

language 'plpgsql'

select * from Q9()

DROP FUNCTION Q9()