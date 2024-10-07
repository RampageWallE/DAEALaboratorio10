const sql = require('mssql');

// Configuración de la base de datos
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Si estás usando SQL Azure
    trustServerCertificate: true // Si estás en desarrollo local
  }
};

async function getCustomers() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT TOP 5 * FROM sys.databases');
    return result.recordset;
  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
  }
}

module.exports = {
  getCustomers
};
