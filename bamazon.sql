CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (40) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price INTEGER(20) NOT NULL,
stock_quantity INTEGER(30) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("true religion", "shirts", 30, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("levi", "pants", 70, 16);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chanel", "necklace", 250, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chanel", "bracelet", 740, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("levi", "jacket", 300, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("FOG", "jacket", 250, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nike", "shoes", 100, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("adidas", "shoes", 140, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("burberry", "scarf", 80, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vans", "tank", 30, 15);
SELECT * FROM products 