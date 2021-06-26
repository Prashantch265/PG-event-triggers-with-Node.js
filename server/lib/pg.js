const { Pool, Client } = require("pg");

require("dotenv").config();

module.exports = (pg) => {
  const client = new Client({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DB,
    password: process.env.DBPWD,
    port: process.env.DBPORT,
  });

  client
    .connect()
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

  // const query = new Query('listen newevent');

  // const pool = new Pool({
  //   user: "postgres",
  //   host: "localhost",
  //   database: "authmanager",
  //   password: "postgres",
  //   port: 5432,
  // });

  // pool.query("SELECT NOW()", (err, res) => {
  //   console.log(err, res);
  //   pool.end();
  // });
};
