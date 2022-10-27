-- AUTO INCREMENT Field
-- Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.

-- Often this is the primary key field that we would like to be created automatically every time a new record is inserted.

CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);

