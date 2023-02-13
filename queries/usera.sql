
-- CREATE DATABASE databaseapp;
-- USE databaseapp;
-- CREATE TABLE Users(
--     UserID INT AUTO_INCREMENT PRIMARY KEY,
--     FirstName varchar(50) NOT NULL,
--     LastName varchar(50) NOT NULL
-- );
;

USE databaseapp;


SELECT * FROM users;



SELECT * FROM members;



INSERT INTO Users(FirstName, LastName)
VALUES ('John', 'Doe'),('Barbara', 'Walker'), ('Jamie', 'Brown');



-- CREATE USER 'sequelizeUser'@'localhost' IDENTIFIED BY 'Password1';
-- GRANT ALL PRIVILEGES ON sequelizedatabase.* TO 'sequelizeUser'@'localhost';
-- FLUSH PRIVILEGES;


-- CREATE USER 'sequelizeUser2'@'%' IDENTIFIED BY 'Password1';
-- GRANT ALL PRIVILEGES ON *.* TO 'sequelizeUser2'@'%' WITH GRANT OPTION;
-- FLUSH PRIVILEGES;



CREATE USER 'sequelizeUser'@'%' IDENTIFIED BY 'Passord1';

GRANT ALL PRIVILEGES ON sequelizedatabase.* TO 'sequelizeUser'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;










