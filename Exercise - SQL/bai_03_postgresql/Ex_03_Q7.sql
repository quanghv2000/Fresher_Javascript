-- Câu 7: Hiển thị MaDatPhong, MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, MaKH, TenKH, SoDT, NgayDat, GioBatDau, GioKetThuc, MaDichVu, SoLuong, DonGia 
-- của những đơn đặt phòng có năm đặt phòng là “2016”, “2017” và đặt những phòng có giá phòng > 50,000 VNĐ/ 1 giờ. (1 điểm)

select dp.madatphong, dp.maphong, p.loaiphong, p.sokhachtoida,
p.giaphong, kh.makh, kh.tenkh, kh.sodt,
dp.ngaydat, dp.giobatdau, dp.gioketthuc,
ctsdd.madv, ctsdd.soluong, dvdk.dongia
from dat_phong dp
join phong p on p.maphong = dp.maphong
join khach_hang kh on kh.makh = dp.makh
join chi_tiet_su_dung_dv ctsdd on ctsdd.madatphong = dp.madatphong
join dich_vu_di_kem dvdk on dvdk.madv = ctsdd.madv

create or replace function Q7() 
	returns table (
		madatphong int,
		maphong int,
		loaiphong varchar,
		sokhachtoida int,
		giaphong numeric,
		makh int,
		tenkh varchar,
		sodt bpchar,
		ngaydat date,
		giobatdau time,
		gioketthuc time,
		madv int,
		soluong int,
		dongia numeric
	)
as $$
begin
	return query
	select dp.madatphong, dp.maphong, p.loaiphong, p.sokhachtoida,
	p.giaphong, kh.makh, kh.tenkh, kh.sodt,
	dp.ngaydat, dp.giobatdau, dp.gioketthuc,
	ctsdd.madv, ctsdd.soluong, dvdk.dongia
	from dat_phong dp
	join phong p on p.maphong = dp.maphong
	join khach_hang kh on kh.makh = dp.makh
	join chi_tiet_su_dung_dv ctsdd on ctsdd.madatphong = dp.madatphong
	join dich_vu_di_kem dvdk on dvdk.madv = ctsdd.madv;
end; $$

language 'plpgsql'

select * from Q7()

DROP FUNCTION Q7()
