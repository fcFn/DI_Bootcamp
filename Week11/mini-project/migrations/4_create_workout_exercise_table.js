exports.up = function(knex) {
  return knex.schema.createTable('workout_exercises', table => {
    table.increments('id').primary();
    table.integer('workout_id').unsigned().references('id').inTable('workouts').onDelete('CASCADE');
    table.integer('exercise_id').unsigned().references('id').inTable('exercises').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('workout_exercises');
};
