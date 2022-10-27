--Câu 2: Cập nhật dữ liệu trên trường GiaPhong thuộc bảng PHONG tăng lên 10,000 VNĐ so với giá phòng hiện tại, 
--chỉ cập nhật giá phòng của những phòng có số khách tối đa lớn hơn 10. (1 điểm)

select * from phong p 

UPDATE phong
SET giaphong = giaphong + 10
WHERE sokhachtoida > 10;

CREATE OR REPLACE FUNCTION Q2() 
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
    UPDATE phong
	SET giaphong = giaphong + 10
    WHERE sokhachtoida > 10;
    RETURN FOUND;
end $$;

select Q2()

DROP FUNCTION Q2()