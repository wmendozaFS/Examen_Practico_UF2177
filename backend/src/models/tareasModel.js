const mysqlPool = require('../src/db/database');

async function getAllTareas() {
  const [rows] = await mysqlPool.query('SELECT * FROM tareas');
  return rows;
}

async function getTareaById(id) {
  const [rows] = await mysqlPool.query('SELECT * FROM tareas WHERE id = ?', [id]);
  return rows[0];
}

async function createTarea(titulo, descripcion, completada, categoria_id) {
  const [result] = await mysqlPool.query(
    'INSERT INTO tareas (titulo, descripcion, completada, categoria_id) VALUES (?, ?, ?, ?)',
    [titulo, descripcion, completada, categoria_id]
  );
  return result.insertId;
}   

async function updateTarea(id, titulo, descripcion, completada, categoria_id) {
  await mysqlPool.query(
    'UPDATE tareas SET titulo = ?, descripcion = ?, completada = ?, categoria_id = ? WHERE id = ?',
    [titulo, descripcion, completada, categoria_id, id]
  );
}

async function deleteTarea(id) {
  await mysqlPool.query('DELETE FROM tareas WHERE id = ?', [id]);
}

module.exports = {
  getAllTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea
};
