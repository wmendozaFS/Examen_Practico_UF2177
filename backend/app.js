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
    console.log('Connected to MySQL database');
    connection.release();
}).catch(err => {
    console.error('MySQL connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Consultoria Mind')
}

);
// dentro del app.use
app.use('/api/categorias', categoriasRoutes);
app.use('/api/tareas', tareasRoutes);

module.exports = {
    app,
    mysqlPool,
};  