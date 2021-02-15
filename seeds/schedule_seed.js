exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schedule')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          uid: 'Q3uUd54llIcT1qZ0PUZl9R3V8tg2',
          oid: '1',
          task: 'griddle',
          title: 'Louise on griddle',
          startDate: '2020-01-05T10:30',
          endDate: '2020-01-05T13:45',
        },
        {
          uid: 'Q3uUd54llIcT1qZ0PUZl9R3V8tg2',
          oid: '1',
          task: 'dishes',
          title: 'Louise on dishes',
          startDate: '2020-01-11T12:00',
          endDate: '2020-01-11T13:30',
        },
        {
          uid: 'Q3uUd54llIcT1qZ0PUZl9R3V8tg2',
          oid: '1',
          task: 'bar',
          title: 'Louise on bar',
          startDate: '2020-01-08T09:00',
          endDate: '2020-01-08T17:00',
        },
        {
          uid: 'ne14BAQX3jU6ntFPOflTDHk9GvK2',
          oid: '1',
          task: 'bar',
          title: 'Gene on bar',
          startDate: '2020-01-05T11:00',
          endDate: '2018-01-05T15:30',
        },
        {
          uid: 'ne14BAQX3jU6ntFPOflTDHk9GvK2',
          oid: '1',
          task: 'dishes',
          title: 'Gene on dishes',
          startDate: '2020-01-07T09:45',
          endDate: '2020-01-07T13:45',
        },
        {
          uid: 'ne14BAQX3jU6ntFPOflTDHk9GvK2',
          oid: '1',
          task: 'griddle',
          title: 'Gene on griddle',
          startDate: '2020-01-10T09:00',
          endDate: '2020-01-10T17:00',
        },
        {
          uid: 'Da5L8aulKcUG0dTd1fUMU1CHjun1',
          oid: '1',
          task: 'dishes',
          title: 'Tina on dishes',
          startDate: '2020-01-06T09:30',
          endDate: '2018-01-06T17:45',
        },
        {
          uid: 'Da5L8aulKcUG0dTd1fUMU1CHjun1',
          oid: '1',
          task: 'bar',
          title: 'Tina on bar',
          startDate: '2020-01-07T12:00',
          endDate: '2020-01-07T15:30',
        },
        {
          uid: 'Da5L8aulKcUG0dTd1fUMU1CHjun1',
          oid: '1',
          task: 'griddle',
          title: 'Tina on griddle',
          startDate: '2020-01-09T11:00',
          endDate: '2020-01-09T19:00',
        },
      ]);
    });
};
