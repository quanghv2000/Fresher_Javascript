-- SQL UNIQUE Constraint
-- The UNIQUE constraint ensures (đảm bảo) that all values in a column are different.

-- Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns.

-- A PRIMARY KEY constraint automatically has a UNIQUE constraint.

-- However, you can have many UNIQUE constraints per table, but only one PRIMARY KEY constraint per table.

CREATE TABLE Persons (
    ID int NOT NULL,
    `Code` varchar(50) NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);

-- create UNIQUE constraint on the 'Code' column
ALTER TABLE Persons
ADD UNIQUE (`Code`);

-- define a UNIQUE constraint on multiple column
ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID, `Code`);

ALTER TABLE Persons
DROP INDEX UC_Person;

ALTER TABLE Persons
DROP CONSTRAINT UC_Person;