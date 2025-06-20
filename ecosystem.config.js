module.exports = {
    apps: [
      {
        name: 'es-backend',
        script: 'dist/main.js',
        instances: 4,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
          PORT: process.env.PORT,
          DATABASE_URL: process.env.DB_URL,
          REDIS_HOST: process.env.REDIS_HOST,
          REDIS_PORT: process.env.REDIS_PORT
        }
      }
    ]
  }