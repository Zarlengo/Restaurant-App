-- Populate the menu table with popular burger names
INSERT INTO menu (burger_name, src, title) VALUES 
('Placeholder Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Mushroom Burger', 'assets/img/mushroomBurger.jpg', 'Icons made by Freepik'),
('BBQ Bacon Cheddar Burger', 'assets/img/baconCheddar.jpg', 'Icons made by Freepik'),
('Breakfast Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Steakhouse Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Single Cheeseburger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Mott Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Ozersky Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Tavern Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Guacamole Bacon Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Vegan Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Veggie Burger', 'assets/img/burger.png', 'Icons made by Freepik');

-- Populate the menu table with popular burger names
INSERT INTO burgers (burger_name, devoured, menu_id) VALUES 
('Mushroom Burger', false, 1),
('Steakhouse Burger', true, 4),
('Ozersky Burger', false, 7),
('Guacamole Bacon Burger', true, 9);
