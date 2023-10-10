import knex from 'knex';

const knexInstance = knex({
  client: 'mysql2',
  connection: {
    host: '143.106.241.3',
    user: 'cl201172',
    password: 'cl*10102005',
    database: 'cl201172',
    port: 3306,
  },
});

export default knexInstance;




