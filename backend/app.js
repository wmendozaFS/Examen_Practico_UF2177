const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const tareasRoutes = require('./src/routes/tareasRoutes');
const categoriasRoutes = require('./src/routes/categoriasRoutes');
dotenv.config();
const app = express();
app.use(express.json());

const mysqlPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
mysqlPool.getConnection().then(connection => {
    console.log('Conectado a la base de datos MySQL');
    connection.release();
}).catch(err => {
    console.error('MySQL error de conexion:', err);
});

app.get('/', (req, res) => {
    res.send('Bienvenidos al Gestor de Tareas')
}

);
// dentro del app.use
app.use('/api/categorias', categoriasRoutes);
app.use('/api/tareas', tareasRoutes);

module.exports = {
    app,
    mysqlPool,
};  