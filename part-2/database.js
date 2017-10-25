const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/grocery_store";
const db = pgp(connectionString);

const queries = {

 productList: (section) => {
  return db.many((`
    SELECT name, section FROM products
    WHERE section = $1;
    `), [section]);
},

 shopperOrders: (id) => {
  // return db.many((`
  //   SELECT orders.id, SUM(products.price) as total_cost FROM orders
  //   INNER JOIN order_list ON orders.id = order_list.order_id
  //   INNER JOIN products ON products.id = order_list.grocery_id
  //   WHERE orders.shopper_id = $1
  //   GROUP BY orders.id;
  //   `), [id]);
  return db.many((`
    SELECT orders.id AS "order_id", SUM(products.price) AS "total_cost"
           FROM products
           JOIN order_list
           ON order_list.grocery_id = products.id
           JOIN orders
           ON order_list.order_id = orders.id
           WHERE
           orders.shopper_id = $1
           GROUP BY
           orders.id;
    `), [id]);
},

 realShoppers: () => {
  return db.many((`
    SELECT shoppers.name as shopper_name, COUNT(*) AS number_of_orders FROM shoppers
    INNER JOIN orders ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.name
    ORDER BY COUNT(*) ASC;
    `), []);
},
};

module.exports = queries;
