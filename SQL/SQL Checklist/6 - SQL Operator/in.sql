-- The IN operator allows you to specify (xác định) multiple values in a WHERE clause.
-- The IN operator is a shorthand (cách viết ngắn) for multiple OR conditions.

SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');