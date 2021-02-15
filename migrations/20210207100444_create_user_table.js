exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('role').notNullable();
    table.string('uid').notNullable();
    table.string('oid').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
