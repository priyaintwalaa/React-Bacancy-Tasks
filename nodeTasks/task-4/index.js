const express = require("express");
const { Pool } = require("pg");
const port = 5555;
const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "training",
  password: "bacancy",
  port: 5432,
});

app.use(express.json());

// pool.query('SELECT * FROM Products', (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log(results.rows)
// })

/**
 * 3 tables: users, products, orders
 * create products, get all products, get product by id, delete product, update product
 * [home work] create users, get all users, get user by id, delete user, update user, get all orders
 * get top 5 cheap products (price < 150)
 * get all users whose birth day fall in given date range
 * get user's all orders
 * get order details
 */

app.get("/products", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM Products");
    res.status(200).json({
      msg: "Products fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const prodId = req.params.id;
    const { rows } = await pool.query("SELECT * FROM Products WHERE id = $1", [
      prodId,
    ]);

    res.status(200).json({
      msg: "Product fetched successfully",
      data: rows.length > 0 ? rows[0] : {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    // express-validator, joi

    const queryT =
      "INSERT INTO products(name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *";

    const { rows } = await pool.query(queryT, [
      name,
      description,
      price,
      stock,
    ]);

    res.status(200).json({
      msg: "Product added successfully",
      data: rows.length > 0 ? rows[0] : {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const { id } = req.params;

    // express-validator, joi
    // check if that products is exist or not

    const queryT =
      "UPDATE products SET name = $1, price = $2, description = $3, stock = $4 WHERE id = $5 RETURNING *";

    const { rows } = await pool.query(queryT, [
      name,
      price,
      description,
      stock,
      id,
    ]);

    res.status(200).json({
      msg: "Product updated successfully",
      data: rows.length > 0 ? rows[0] : {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // express-validator, joi

    const queryT = "DELETE FROM products WHERE id = $1";

    await pool.query(queryT, [id]);

    res.status(200).json({
      msg: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.get("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // express-validator, joi

    const queryT = `SELECT * FROM orders o
      JOIN users u ON o.user_id = u.id
      JOIN products p ON o.product_id = p.id
      WHERE o.id = $1
      `;

    const { rows } = await pool.query(queryT, [id]);

    res.status(200).json({
      msg: "Order details fetched successfully",
      data: rows.length > 0 ? rows[0] : {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
