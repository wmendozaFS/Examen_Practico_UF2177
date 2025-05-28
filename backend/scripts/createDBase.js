// scripts/createTables.js
require('dotenv').config();
const mysql = require('mysql2/promise');

async function createDBase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      // database: process.env.MYSQL_DATABASE,
      multipleStatements: true // ✅ Esto permite ejecutar varios CREATE a la vez

    });

    console.log('✅ Conectado a MySQL');

    const sql = `CREATE DATABASE IF NOT EXISTS gestion_tareas;
                 USE gestion_tareas;`;
    await connection.query(sql);
    console.log('✅ Base de Datos MySQL creadas correctamente');
    await connection.end();
  } catch (error) {
    console.error('❌ Error al crear base de datos:', error.message);
  }
}

createDBase();
