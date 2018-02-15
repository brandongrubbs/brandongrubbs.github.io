DROP DATABASE IF EXISTS Bamazon_db;

CREATE DATABASE Bamazon_db;

USE Bamazon_db;

	CREATE TABLE products (
  item_id VARCHAR(80) NOT NULL,
  product_name VARCHAR(80) NOT NULL,
  department_name VARCHAR(80) NULL,
  price DECIMAL(10,3) NULL,
  quantiy INTEGER(10,3) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;