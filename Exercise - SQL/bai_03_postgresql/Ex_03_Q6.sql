--Câu 6: Hiển thị MaDV, TenDV, DonViTinh, DonGia của những dịch vụ đi kèm có DonViTinh là “lon” 
-- và có DonGia lớn hơn 10,000 VNĐ hoặc những dịch vụ đi kèm có DonViTinh là “Cai” và có DonGia nhỏ hơn 5,000 VNĐ. (1 điểm)

select * from dich_vu_di_kem dvdk 
where (dvdk.donvitinh = 'LON' and dvdk.dongia > 10) 
or (dvdk.donvitinh = 'CAI' and dvdk.dongia < 5)

create or replace function Q6() 
	returns table (
		madv int,
		tendv varchar,
		donvitinh varchar,
		dongia numeric
	)
as $$
begin
	return query
	select * from dich_vu_di_kem dvdk 
	where (dvdk.donvitinh = 'LON' and dvdk.dongia > 10) 
	or (dvdk.donvitinh = 'CAI' and dvdk.dongia < 5);
end; $$

language 'plpgsql'

select * from Q6()

DROP FUNCTION Q6()