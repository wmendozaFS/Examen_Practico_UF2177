// routes/tareasRoutes.js
const express = require('express');
const router = express.Router();
const tareasController = require('../src/controllers/tareasController');

// Rutas
router.get('/', tareasController.getAllTareas);
router.get('/:id', tareasController.getTareaById);
router.post('/', tareasController.createTarea);
router.put('/:id', tareasController.updateTarea);
router.delete('/:id', tareasController.deleteTarea);

module.exports = router;
