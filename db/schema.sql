### Schema

CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE restaurants
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	price varchar(10) NOT NULL,
	devoured boolean NOT NULL,
	rating INT,
	PRIMARY KEY (id),
);
