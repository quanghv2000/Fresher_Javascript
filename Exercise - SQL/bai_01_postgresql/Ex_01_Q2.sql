-- Q2. Liệt kê thông tin của các nhà cung cấp đã từng đăng ký cung cấp những dòng xe
-- thuộc hãng xe “Toyota” với mức phí có đơn giá là 15.000 VNĐ/km hoặc những dòng xe
-- thuộc hãng xe “KIA” với mức phí có đơn giá là 20.000 VNĐ/km

select * from dangkycungcap dkcc
join nhacungcap ncc on dkcc.manhacc = ncc.manhacc 
join dongxe dx on dkcc.dongxe = dx.dongxe
join mucphi mp on dkcc.mamp = mp.mamp
where (dx.hangxe = 'Toyota' and mp.dongia = '15000')
or (dx.hangxe = 'KIA' and mp.dongia = '20000')