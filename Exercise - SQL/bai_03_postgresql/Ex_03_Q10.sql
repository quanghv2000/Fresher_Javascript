-- Câu 10: Hiển thị MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, SoLanDat 
-- của những phòng được khách hàng đặt có số lần đặt lớn hơn 2 lần và trạng thái đặt là “Da dat”. (1 điểm)

select p.maphong, p.loaiphong, p.sokhachtoida,
p.giaphong, count(p.maphong) as solandat, dp.trangthaidat
from phong p 
join dat_phong dp on dp.maphong = p.maphong
group by p.maphong, dp.trangthaidat
having count(p.maphong) > 0
and dp.trangthaidat = 'DA DAT'

create or replace function Q10() 
	returns table (
		maphong int,
		loaiphong varchar,
		sokhachtoida int,
		giaphong numeric,
		solandat int8,
		trangthaidat varchar
	)
as $$
begin
	return query
	select p.maphong, p.loaiphong, p.sokhachtoida,
	p.giaphong, count(p.maphong) as solandat, dp.trangthaidat
	from phong p 
	join dat_phong dp on dp.maphong = p.maphong
	group by p.maphong, dp.trangthaidat
	having count(p.maphong) > 2
	and dp.trangthaidat = 'DA DAT';
end; $$

language 'plpgsql'

select * from Q10()

DROP FUNCTION Q10()
