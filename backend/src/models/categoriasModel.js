const mysqlPool = require('../db/database');

async function getAllCategorias() {
  const [rows] = await mysqlPool.query('SELECT * FROM categorias');
  return rows;
}

async function getCategoriaById(id) {
  const [rows] = await mysqlPool.query('SELECT * FROM categorias WHERE id = ?', [id]);
  return rows[0];
}

async function createCategoria(nombre) {
  const [result] = await mysqlPool.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre]);
  return result.insertId;
}   

async function updateCategoria(id, name) {
  await mysqlPool.query('UPDATE categorias SET nombre = ? WHERE id = ?', [id, name]);
}

async function deleteCategoria(id) {
    await mysqlPool.query('DELETE FROM categorias WHERE id = ?', [id]);
}

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
};
