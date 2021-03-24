require("dotenv").config();

const parse = require("pg-connection-string").parse;
let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

module.exports = {
    // development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || {
            host: process.env.DATABASE_HOST || "localhost:4000",
            port: process.env.DATABASE_PORT || "5432",
            database: process.env.DATABASE_NAME || "favorite",
            user: process.env.DATABASE_USER || "postgres",
            password: process.env.DATABASE_PASSWORD || "kikilala",
          },
        // pool: {
        //     min:2,
        //     max:10
        // },
        migrations: {
            tableName:'knex_migrations',
            directory: './server/migrations',
        },
        seeds: {
            directory: './server/seeds',
        },
        searchPath: 'public',
    // },
    // staging: {
    //     client: 'pg',
    //     connection:
    //         pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/favorite`,
    //     pool: {
    //         min:2,
    //         max:10
    //     },
    //     migrations: {
    //         tableName: 'song_list',
    //         directory: __dirname + "/server/migrations",
    //     },
    // },
    // production: {
    //     client: 'pg',
    //     connection:
    //         pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/favorite`,
    //     pool: {
    //         min:2,
    //         max:10
    //     },
    //     migrations: {
    //         tableName: 'song_list',
    //         directory: __dirname + "/server/migrations",
    //     },
    // },
};