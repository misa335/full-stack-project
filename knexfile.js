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
        connection: pgconfig || {
            host: process.env.DATABASE_HOST || "127.0.0.1",
            port: process.env.DATABASE_PORT || "5432",
            database: process.env.DATABASE_NAME || process.env.DB_NAME,
            user: process.env.DATABASE_USER || process.env.DB_USER,
            password: process.env.DATABASE_PASSWORD || process.env.DB_PW,
          },
        // pool: {
        //     min:2,
        //     max:10
        // },
        migrations: {
            tableName:'knex_migrations',
            directory: __dirname + '/server/migrations',
        },
        seeds: {
            directory: __dirname + '/server/seeds',
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