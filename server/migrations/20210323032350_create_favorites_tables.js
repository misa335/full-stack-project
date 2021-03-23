exports.up = function(knex) {
  return knex.schema.createTable('song_list', (table) => {
        table.increments('id').primary();
        table.string('artist_name').notNullable();
        table.string('song_title').notNullable();
        table.timestamp('date').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('song_list');
};
