-- SQL PRIMARY KEY Constraint
-- The PRIMARY KEY constraint uniquely identifies each record in a table.

-- Primary keys must contain UNIQUE values, and cannot contain NULL values.

-- A table can have only ONE primary key; and in the table, 
-- this primary key can consist (bao gồm) of single or multiple columns (fields).

CREATE TABLE Persons (
    ID int NOT NULL,
    `Code` varchar(50) NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID, `Code`)
);

ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID, `Code`);

ALTER TABLE Persons
DROP PRIMARY KEY;