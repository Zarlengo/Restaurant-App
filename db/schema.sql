-- Create the menu table
DROP TABLE IF EXISTS menu CASCADE;
CREATE TABLE menu (
	menu_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	burger_name VARCHAR(128) NOT NULL,
	src VARCHAR(128),
	title VARCHAR(128)
);

-- Create the burgers table
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
	burger_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN,
	menu_id INTEGER,
	CONSTRAINT fk_menu
		FOREIGN KEY(menu_id)
			REFERENCES menu(menu_id)
);
