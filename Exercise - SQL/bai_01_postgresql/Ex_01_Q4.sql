-- Q4. Đếm số lần đăng ký cung cấp phương tiện tương ứng cho từng nhà cung cấp với
-- yêu cầu chỉ đếm cho những nhà cung cấp thực hiện đăng ký cung cấp có ngày bắt đầu
-- cung cấp là “20/11/2015”

select ncc.tennhacc, count(ncc.tennhacc) 
from dangkycungcap dkcc
join nhacungcap ncc on dkcc.manhacc = ncc.manhacc
join dongxe dx on dkcc.dongxe = dx.dongxe
group by ncc.tennhacc

select ncc.tennhacc, count(ncc.tennhacc) from (
	select ncc.tennhacc, dkcc.ngaybatdaucungcap
	from dangkycungcap dkcc
	join nhacungcap ncc on dkcc.manhacc = ncc.manhacc
	join dongxe dx on dkcc.dongxe = dx.dongxe
--	where dkcc.ngaybatdaucungcap = ('11/20/2015')
) as ncc
group by ncc.tennhacc

