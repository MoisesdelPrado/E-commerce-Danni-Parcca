CREATE DATABASE danni_parcca IF NOT EXISTS;

USE danni_parcca;

CREATE TABLE Product (
    Product_name VARCHAR(50) NOT NULL,
    Id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Description VARCHAR(500),
    Category VARCHAR(50) NOT NULL,
    Flavor VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    Rating DECIMAL(10,2),
    NumberOfRatings INT,
    In_Stock BOOLEAN,
    Image_src VARCHAR(2000)
);

CREATE TABLE Users (
    Username VARCHAR(50) NOT NULL,
    Id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Password VARCHAR(500),
    Type BOOLEAN
);