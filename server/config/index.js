require('dotenv').config();

const config = {
    server_port: process.env.SERVER_PORT || 3000,
    env: process.env.NODE_ENV || 'dev',
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbDialect: process.env.DB_DIALECT,
}

module.exports = config;
