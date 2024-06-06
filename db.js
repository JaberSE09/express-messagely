/** Database setup for BizTime. */

const { Client } = require("pg");

let db = new Client({
  user:"sajid" ,
  password: "root",
  database: "messagely",
});

db.connect();

module.exports = db;