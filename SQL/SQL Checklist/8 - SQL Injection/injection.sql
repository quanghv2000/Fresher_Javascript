-- SQL Injection
-- SQL injection is a code injection technique that might destroy your database.

-- SQL injection is one of the most common web hacking techniques.

-- SQL injection is the placement of malicious code in SQL statements, via web page input.

-- SQL Injection Based on 1=1 is Always True

SELECT * FROM Users WHERE UserId = 105 OR 1=1;

-- SQL Injection Based on ""="" is Always True

SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""="";

-- SQL Injection Based on Batched SQL Statements 

SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;