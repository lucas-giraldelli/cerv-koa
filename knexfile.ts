const configuration = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'cerv-infancia',
      port: 3306, // MySQL default port
      timezone: 'UTC'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }
};

export default configuration;
