CREATE DATABASE IF NOT EXISTS web_client;
USE web_client;

DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT NOT NULL,
  username VARCHAR(255),
  password CHAR(128),
  PRIMARY KEY(id)
);
