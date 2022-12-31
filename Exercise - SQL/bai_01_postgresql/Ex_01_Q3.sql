-- Q3. Liệt kê thông tin toàn bộ nhà cung cấp được sắp xếp tăng dần theo tên nhà cung
-- cấp và giảm dần theo mã số thuế

select * from nhacungcap ncc
order by tennhacc asc, masothue desc