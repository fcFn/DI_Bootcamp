exports.up = function(knex) {
  return knex.schema.createTable('exercises', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.string('muscle_group');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('exercises');
};
