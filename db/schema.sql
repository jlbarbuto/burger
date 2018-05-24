-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the database --
CREATE DATABASE burgers_db;

USE burgers_db;
-- Creates the table --
CREATE TABLE burgers(
	id INTEGER(20) AUTO_INCREMENT NOT NULL,
    buger_name VARCHAR(20),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);