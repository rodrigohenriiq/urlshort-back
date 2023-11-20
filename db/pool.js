const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'urlshortener',
  password: '123456789',
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
