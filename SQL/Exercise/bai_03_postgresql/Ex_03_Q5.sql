-- Câu 5: Hiển thị TenKH của tất cả các khách hàng có trong hệ thống, TenKH nào trùng nhau thì chỉ hiển thị một lần.
-- Sinh viên sử dụng hai cách khác nhau để thực hiện yêu cầu trên, mỗi cách sẽ được 0,5 điểm. (1 điểm)

-- select distinct kh.tenkh from khach_hang kh

-- select kh.tenkh from khach_hang kh
-- group by kh.tenkh

-- Cách 1
create or replace function Q5_C1() 
	returns table (
		tenkh varchar
	)
as $$
begin
	return query
	select distinct kh.tenkh from khach_hang kh;
end; $$

language 'plpgsql'

select * from Q5_C1()

DROP FUNCTION Q5_C1()

-- Cách 2
create or replace function Q5_C2() 
	returns table (
		tenkh varchar
	)
as $$
begin
	return query
	select kh.tenkh from khach_hang kh
	group by kh.tenkh;
end; $$

language 'plpgsql'

select * from Q5_C2()

DROP FUNCTION Q5_C2()
