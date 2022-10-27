-- The SQL HAVING Clause
-- The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

SELECT Country, COUNT(CustomerNumber)
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerNumber) > 5;