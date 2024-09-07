exports.up = function(knex) {
  return knex.schema.createTable('workouts', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.integer('created_by').unsigned().references('id').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('workouts');
};
