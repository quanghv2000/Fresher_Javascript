-- Câu 3: Xóa tất cả những đơn đặt phòng (từ bảng DAT_PHONG) có trạng thái đặt (TrangThaiDat) là “Da huy”. (1 điểm)

select * from dat_phong dp

DELETE FROM dat_phong
WHERE trangthaidat = 'DA HUY'

CREATE OR REPLACE FUNCTION Q3() 
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
	DELETE FROM dat_phong
	WHERE trangthaidat = 'DA HUY';
    RETURN FOUND;
end $$;

select Q3()

DROP FUNCTION Q3()