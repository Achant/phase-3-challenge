\copy products(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;
-- \c grocery_store_test
-- COPY products (name, price, section) FROM '/Users/mehdiaminechant/Desktop/Phase_3_Challenge/Part_2/grocery.csv' DELIMITERS ',' CSV;

INSERT INTO shoppers (name) VALUES ('Amine');
INSERT INTO shoppers (name) VALUES ('Omar');
INSERT INTO shoppers (name) VALUES ('Souad');
INSERT INTO shoppers (name) VALUES ('Salah');
INSERT INTO shoppers (name) VALUES ('Erica');
INSERT INTO shoppers (name) VALUES ('Kamal');

INSERT INTO orders (shopper_id, total_cost) VALUES (1, 18.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (1, 23.05);
INSERT INTO orders (shopper_id, total_cost) VALUES (2, 14.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (3, 15.00);
INSERT INTO orders (shopper_id, total_cost) VALUES (5, 12.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (6, 28.50);


INSERT INTO order_list
(order_id, grocery_id)
VALUES
(1, 2),
(1, 14),
(1, 15),
(2, 7),
(2, 4),
(3, 21),
(3, 23),
(4, 23),
(5, 33),
(5, 32);
