-- The SQL UNION Operator
-- The UNION operator is used to combine the result-set of two or more SELECT statements.

-- Every SELECT statement within UNION must have the same number of columns
-- The columns must also have similar data types
-- The columns in every SELECT statement must also be in the same order

SELECT City FROM Customers
UNION
SELECT City FROM offices
ORDER BY City;

-- Note: If some customers or suppliers have the same city, each city will only be listed once, 
-- because UNION selects only distinct values. Use UNION ALL to also select duplicate values!

SELECT City FROM Customers
UNION ALL
SELECT City FROM offices
ORDER BY City;

-- union with where
SELECT Country FROM Customers
WHERE Country='Germany'
UNION
SELECT Country FROM offices
WHERE Country='Germany'
ORDER BY Country;

-- union all with where
SELECT Country FROM Customers
WHERE Country='Germany'
UNION ALL
SELECT Country FROM offices
WHERE Country='Germany'
ORDER BY Country;