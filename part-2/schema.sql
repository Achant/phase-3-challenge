DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store
DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price NUMERIC(1000, 2),
  section VARCHAR(100)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (id),
  total_cost NUMERIC(1000, 2)
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

DROP TABLE IF EXISTS order_list;
CREATE TABLE order_list(
  order_id INTEGER,
  grocery_id INTEGER
);
