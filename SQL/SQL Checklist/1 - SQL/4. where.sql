-- Operators in The WHERE Clause

-- =	Equal	
-- >	Greater than	
-- <	Less than	
-- >=	Greater than or equal	
-- <=	Less than or equal	
-- <>	Not equal. Note: In some versions of SQL this operator may be written as !=	
-- BETWEEN	Between a certain range	
-- LIKE	Search for a pattern	
-- IN	To specify multiple possible values for a column

-- =
SELECT * FROM Customers
WHERE Country='USA';

-- !=
SELECT * FROM Customers
WHERE salesRepEmployeeNumber <> 1188;

-- between
SELECT * FROM Customers
WHERE customerNumber between 125 and 180;

-- like
SELECT * FROM Customers
WHERE CustomerName LIKE '%a%';

-- in
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');
