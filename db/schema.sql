-- Initial setup to create / reset database
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
	id SERIAL PRIMARY KEY,
	burger_name VARCHAR(64),
    devoured BOOLEAN
);
