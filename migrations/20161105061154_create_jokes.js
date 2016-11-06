exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', function (table) {
    table.increments();
    table.string('title');
    table.string('genre');
    table.string('author');
    table.string('joke', 1000);
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jokes');
};
