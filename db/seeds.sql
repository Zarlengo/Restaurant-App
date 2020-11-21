-- Populate the menu table with popular burger names
INSERT INTO menu (burger_name, src, title) VALUES 
('Placeholder Burger', 'assets/img/burger.png', 'Icons made by Freepik'),
('Mushroom Burger', 'assets/img/mushroomBurger.jpg', 'Mushroom Burger'),
('BBQ Bacon Cheddar Burger', 'assets/img/baconCheddar.jpg', 'BBQ Bacon Cheddar Burger'),
('Breakfast Burger', 'assets/img/breakfastBurger.jpg', 'Breakfast Burger'),
('Steakhouse Burger', 'assets/img/steakhouseBurger.jpg', 'Steakhouse Burger'),
('Single Cheeseburger', 'assets/img/cheeseburger.jpg', 'Cheeseburger'),
('Mott Burger', 'assets/img/mottBurger.jpg', 'Mott Burger'),
('Ozersky Burger', 'assets/img/ozerskyBurger.jpg', 'Ozarsky Burger'),
('Tavern Burger', 'assets/img/tavernBurger.jpg', 'Tavern Burger'),
('Guacamole Bacon Burger', 'assets/img/guacamoleBurger.jpg', 'Guacamole Bacon Burger'),
('Vegan Burger', 'assets/img/veganBurger.jpg', 'Vegan Burger'),
('Veggie Burger', 'assets/img/veggieBurger.jpg', 'Veggie Burger');

-- Populate the menu table with popular burger names
INSERT INTO burgers (burger_name, devoured, menu_id) VALUES 
('Mushroom Burger', false, 1),
('Steakhouse Burger', true, 4),
('Ozersky Burger', false, 7),
('Guacamole Bacon Burger', true, 9);
