exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedule', function (table) {
    table.increments();
    table.string('uid').notNullable();
    table.string('oid').notNullable();
    table.string('task').notNullable();
    table.string('title').notNullable();
    table.string('startDate').notNullable();
    table.string('endDate').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('schedule');
};
