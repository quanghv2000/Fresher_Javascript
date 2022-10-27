-- The EXISTS operator is used to test for the existence of any record in a subquery.
-- The EXISTS operator returns TRUE if the subquery returns one or more records.

select * from customers
where exists (select * from customers
where salesRepEmployeeNumber > 1700)