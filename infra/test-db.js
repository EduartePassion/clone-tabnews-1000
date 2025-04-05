require('dotenv').config({ path: '.env.development' });

const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

client.connect()
  .then(() => {
    console.log(' Conectado ao PostgreSQL com sucesso!');
    return client.end();
  })
  .catch(err => {
    console.error(' Erro ao conectar no PostgreSQL:', err);
  });
