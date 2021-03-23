require("dotenv").config();

const parse = require("pg-connection-string").parse;
let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_NAME
        },
        pool: {
            min:2,
            max:10
        },
        migrations: {
            directory: __dirname + "/server/migrations",
        },
        seeds: {
            directory: __dirname + '/server/seeds',
        },
    },

    production: {
        client: 'pg',
        connection:
            pgconfig || `postgres://${process.env.DB_USER}@127.0.0.1:5432/favorites`,
        pool: {
            min:2,
            max:10
        },
        migrations: {
            directory: __dirname + "/server/migrations",
            tableName: 'song_list'
        },
    },
};