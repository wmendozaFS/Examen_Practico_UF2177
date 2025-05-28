// src/controllers/tareaController.js
const tareaModel = require('../src/models/tareasModel');

exports.getAllTareas = async (req, res) => {
  try {
    const tareas = await tareaModel.getAllTareas();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

exports.getTareaById = async (req, res) => {
  try {
    const tarea = await tareaModel.getTareaById(req.params.id);
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

exports.createTarea = async (req, res) => {
  try {
    const {titulo, descripcion, completada, categoria_id} = req.body;
    const tareaId = await tareaModel.createTarea(titulo, descripcion, completada, categoria_id);
    res.status(201).json({ message: 'Tarea creada', tareaId });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

exports.updateTarea = async (req, res) => {
  try {
    const {titulo, descripcion, completada, categoria_id} = req.body;
    await tareaModel.updateTarea(req.params.id, titulo, descripcion, completada, categoria_id);
    res.json({ message: 'Tarea actualizada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

exports.deleteTarea = async (req, res) => {
  try {
    await tareaModel.deleteTarea(req.params.id);
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};
