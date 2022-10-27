SELECT COUNT(*) FROM Customers
WHERE NOT Country='Germany';

SELECT COUNT(*) FROM Customers
WHERE Country!='Germany';

SELECT COUNT(*) FROM Customers
WHERE Country<>'Germany';

SELECT COUNT(*) FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';

SELECT COUNT(*) FROM Customers
WHERE Country NOT IN('Germany', 'USA')