// src/controllers/categoriasController.js
const categoriaModel = require('../models/categoriasModel');

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaModel.getAllCategorias();
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await categoriaModel.getCategoriaById(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json(categoria);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoriaId = await categoriaModel.createCategoria(name, description);
    res.status(201).json({ message: 'Categoría creada', categoriaId });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const { name, description } = req.body;
    await categoriaModel.updateCategoria(req.params.id, name, description);
    res.json({ message: 'Categoría actualizada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    await categoriaModel.deleteCategoria(req.params.id);
    res.json({ message: 'Categoría eliminada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};
