-- Câu 4: Hiển thị TenKH của những khách hàng có tên bắt đầu là một trong các ký tự “H”, “N”, “M” 
-- và có độ dài tối đa là 20 ký tự. (1 điểm)

select kh.tenkh from khach_hang kh
where (kh.tenkh like 'N%'
or kh.tenkh like 'M%'
or kh.tenkh like 'H%') and length(kh.tenkh) <= 20

create or replace function Q4() 
	returns table (
		tenkh varchar
	)
as $$
begin
	return query
	select kh.tenkh from khach_hang kh
	where (kh.tenkh like 'N%'
	or kh.tenkh like 'M%'
	or kh.tenkh like 'H%') and length(kh.tenkh) <= 20;
end; $$

language 'plpgsql'

select * from Q4()

DROP FUNCTION Q4()