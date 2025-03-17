import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: getSSLValues(),
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error("Erro ao executar query:", error);
    throw error;
  } finally {
    await client.end();
  }
}

export default { query };

function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return { ca: process.env.POSTGRES_CA };
  }
  return { rejectUnauthorized: false };
}
