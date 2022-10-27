-- SQL Aliases
-- SQL aliases are used to give a table, or a column in a table, a temporary name. (1 tên tạm thời)
-- Aliases are often used to make column names more readable. (dễ đọc hơn)
-- An alias only exists for the duration of that query.
-- An alias is created with the AS keyword.

SELECT CustomerNumber AS ID, CustomerName AS Customer
FROM Customers;