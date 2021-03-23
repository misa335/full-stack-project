
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('song_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_list').insert([
        {id: 1, artist_name: 'BLACKPINK', song_title: 'WHISTLE'},
        {id: 2, artist_name: 'rihanna', song_title: 'Diamond'}
      ]);
    });
}