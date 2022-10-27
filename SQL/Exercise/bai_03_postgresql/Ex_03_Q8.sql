--Câu 8: Hiển thị MaDatPhong, MaPhong, LoaiPhong, GiaPhong, TenKH, NgayDat, TongTienHat, TongTienSuDungDichVu, TongTienThanhToan 
--tương ứng với từng mã đặt phòng có trong bảng DAT_PHONG. 
--Những đơn đặt phòng nào không sử dụng dịch vụ đi kèm thì cũng liệt kê thông tin của đơn đặt phòng đó ra. (1 điểm)

--TongTienHat = GiaPhong * (GioKetThuc – GioBatDau)
--TongTienSuDungDichVu = SoLuong * DonGia
--TongTienThanhToan = TongTienHat + sum (TongTienSuDungDichVu)

--select dp.madatphong, p.maphong, p.loaiphong, p.giaphong,
--kh.tenkh, dp.ngaydat, dp.giobatdau, dp.gioketthuc,
--EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 as sogiohat,
--dvdk.tendv, ctsdd.soluong, dvdk.dongia,
--EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 * p.giaphong as tongtienhat,
--ctsdd.soluong * dvdk.dongia as tongtiensudungdichvu
--from dat_phong dp 
--join phong p on p.maphong = dp.maphong
--join khach_hang kh on kh.makh = dp.makh
--join chi_tiet_su_dung_dv ctsdd on ctsdd.madatphong = dp.madatphong
--join dich_vu_di_kem dvdk on dvdk.madv = ctsdd.madv

select dp.madatphong, p.maphong, p.loaiphong, p.giaphong,
kh.tenkh, dp.ngaydat,
(EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 * p.giaphong) as tongtienhat,
sum(ctsdd.soluong * dvdk.dongia) as tongtiensudungdichvu,
sum(ctsdd.soluong * dvdk.dongia) + (EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 * p.giaphong) as tongtienthanhtoan
from dat_phong dp 
join phong p on p.maphong = dp.maphong
join khach_hang kh on kh.makh = dp.makh
join chi_tiet_su_dung_dv ctsdd on ctsdd.madatphong = dp.madatphong
join dich_vu_di_kem dvdk on dvdk.madv = ctsdd.madv
group by dp.madatphong, p.maphong, kh.makh

create or replace function Q8() 
	returns table (
		madatphong int,
		maphong int,
		loaiphong varchar,
		giaphong numeric,
		tenkh varchar,
		ngaydat date,
		tongtienhat float,
		tongtiensudungdichvu numeric,
		tongtienthanhtoan float
	)
as $$
begin
	return query
	select dp.madatphong, p.maphong, p.loaiphong, p.giaphong,
	kh.tenkh, dp.ngaydat,
	(EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 * p.giaphong) as tongtienhat,
	sum(ctsdd.soluong * dvdk.dongia) as tongtiensudungdichvu,
	sum(ctsdd.soluong * dvdk.dongia) + (EXTRACT(EPOCH FROM (dp.gioketthuc - dp.giobatdau )) / 3600 * p.giaphong) as tongtienthanhtoan
	from dat_phong dp 
	join phong p on p.maphong = dp.maphong
	join khach_hang kh on kh.makh = dp.makh
	join chi_tiet_su_dung_dv ctsdd on ctsdd.madatphong = dp.madatphong
	join dich_vu_di_kem dvdk on dvdk.madv = ctsdd.madv
	group by dp.madatphong, p.maphong, kh.makh;
end; $$

language 'plpgsql'

select * from Q8()

DROP FUNCTION Q8()
