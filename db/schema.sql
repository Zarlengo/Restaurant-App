-- Initial setup to create / reset database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers.db;

-- Create the burgers table
CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(64),
    devoured BOOLEAN,
	PRIMARY KEY (id)
);
