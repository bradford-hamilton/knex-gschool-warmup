
exports.up = function(knex, Promise) {
  return knex.schema.createTable('traits', function(table) {
    table.increments();
    table.string('best');
    table.string('worst');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('traits');
};
