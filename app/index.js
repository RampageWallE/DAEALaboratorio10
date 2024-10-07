const express = require('express');
const { getCustomers } = require('./db');

const app = express();
const port = 3000;

// Ruta para probar la conexión con SQL Server
app.get('/customers', async (req, res) => {
  try {
    const customers = await getCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).send('Error al obtener los datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
