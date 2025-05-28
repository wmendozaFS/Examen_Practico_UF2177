// scripts/createTables.js
require('dotenv').config();
const mysql = require('mysql2/promise');

async function createTables() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      multipleStatements: true // ✅ Esto permite ejecutar varios CREATE a la vez

    });

    console.log('✅ Conectado a MySQL');

    const sql = `
    CREATE TABLE IF NOT EXISTS categorias (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS tareas (
     id INT AUTO_INCREMENT PRIMARY KEY,
     titulo VARCHAR(255) NOT NULL,
     descripcion TEXT,
     completada BOOLEAN DEFAULT FALSE,
     categoria_id INT,
     FOREIGN KEY (categoria_id) REFERENCES categorias(id)
       ON DELETE SET NULL ON UPDATE CASCADE
    );`;

    await connection.query(sql);
    console.log('✅ Tablas MySQL creadas correctamente');
    await connection.end();
  } catch (error) {
    console.error('❌ Error al crear tablas:', error.message);
  }
}

createTables();
