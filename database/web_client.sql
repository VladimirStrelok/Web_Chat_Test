CREATE DATABASE IF NOT EXISTS web_client;
USE web_client;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id INT NOT NULL,
  username VARCHAR(255),
  password CHAR(128),
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS chat_rooms;
CREATE TABLE chat_rooms(
  id INT NOT NULL,
  roomname VARCHAR(255),
  password CHAR(128),
  created_by INT,
  PRIMARY KEY(id),
  FOREIGN KEY (created_by)
   REFERENCES users(id)
)
