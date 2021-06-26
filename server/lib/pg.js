const { Client } = require("pg");

const client = new Client({
  user: postgres || process.env.DBUSER,
  host: localhost || process.env.DBHOST,
  database: process.env.DB,
  password: postgres || process.env.DBPWD,
  port: 5432 || process.env.DBPORT,
});

module.exports = client;
