module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/knex-jokes',
    pool: {
      min: 2,
      max: 10
    }
  }

};
