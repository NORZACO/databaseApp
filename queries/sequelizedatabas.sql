

USE sequelizedatabase;



SELECT * FROM users;


 SHOW FULL COLUMNS FROM `Users`;



 SELECT TABLE_NAME 
 FROM INFORMATION_SCHEMA.TABLES 
 WHERE 
 TABLE_TYPE = 'BASE TABLE' AND 
 TABLE_NAME = 'Users' AND 
 TABLE_SCHEMA = 'SequelizeDatabase'