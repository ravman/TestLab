// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'test_lab_development',
      user:     'rmubuntu',
      password: 'rmubuntu!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrate: {

    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'test_lab_development',
      user:     'rmubuntu',
      password: 'rmubuntu!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrate: {

    }
  }

};
