exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('password');
      table.string('email');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.string('movie_id');
      table.string('title');
      table.string('poster_path');
      table.string('release_date');
      table.string('vote_average');
      table.string('overview');
      table.foreign('user_id')
        .references('users.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users')
  ]);
};