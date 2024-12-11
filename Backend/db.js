const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',       // replace with your PostgreSQL username
    host: 'localhost',      // replace with your PostgreSQL host
    database: 'workshop',   // replace with your PostgreSQL database name
    password: 'workshop',   // replace with your PostgreSQL password
    port: 5432              // replace with your PostgreSQL port (default is 5432)
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
