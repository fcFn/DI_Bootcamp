exports.up = function(knex) {
  return knex.schema.createTable('user_workouts', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('workout_id').unsigned().references('id').inTable('workouts');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_workouts');
};
