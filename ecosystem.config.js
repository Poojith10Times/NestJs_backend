module.exports = {
    apps: [
      {
        name: 'es-backend',
        script: 'dist/main.js',
        instances: 4,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
          PORT: 2000,
          DATABASE_URL: process.env.DATABASE_URL,
          REDIS_URL: process.env.REDIS_URL
        }
      }
    ]
  }