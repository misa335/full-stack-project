// const knex = require('knex');
require("dotenv").config();
const config = require('../knexfile.js');


// const parse = require("pg-connection-string").parse;
// let pgconfig = null;
// if (process.env.DATABASE_URL) {
//   pgconfig = parse(process.env.DATABASE_URL);
//   pgconfig.ssl = { rejectUnauthorized: false };
// }

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: process.env.DB_USER,
//         password: process.env.DB_PW,
//         database: process.env.DB_NAME
// }
//   searchPath: "public",
// });

const knex = require("knex")(config);

// module.exports = db;

module.exports = knex;