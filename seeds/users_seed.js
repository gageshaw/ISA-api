exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          uid: 'Q3uUd54llIcT1qZ0PUZl9R3V8tg2',
          oid: '1',
          name: 'louise',
          role: 'owner',
        },
        {
          uid: 'Da5L8aulKcUG0dTd1fUMU1CHjun1',
          oid: '1',
          name: 'tina',
          role: 'manager',
        },
        {
          uid: 'ne14BAQX3jU6ntFPOflTDHk9GvK2',
          oid: '1',
          name: 'gene',
          role: 'common',
        },
      ]);
    });
};
