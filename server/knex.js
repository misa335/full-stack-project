require("dotenv").config();
const config = require('../knexfile.js')[environment]
// const knex = require("knex");

// const parse = require("pg-connection-string").parse;
// let pgconfig = null;
// if (process.env.DATABASE_URL) {
//   pgconfig = parse(process.env.DATABASE_URL);
//   pgconfig.ssl = { rejectUnauthorized: false };
// }

// const db = knex({
//   client: "pg",
//   connection:
//     pgconfig ||
//     `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/favorites`,
//   searchPath: "public",
// });

// module.exports = db;

module.exports = require('knex')(config);