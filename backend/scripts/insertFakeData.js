const db = require('../src/db/database');

// Categorías de ejemplo
const categorias = ['Trabajo', 'Personal', 'Estudios', 'Salud', 'Ocio'];

// Insertar categorías
categorias.forEach((nombre) => {
  db.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre], (err) => {
    if (err) console.error('Error insertando categoría:', err.message);
  });
});

// Tareas de ejemplo
const tareas = [
  { titulo: 'Preparar presentación', descripcion: 'Para la reunión del lunes', completada: 0, categoria_id: 1 },
  { titulo: 'Hacer la compra', descripcion: 'Frutas, verduras y leche', completada: 1, categoria_id: 2 },
  { titulo: 'Estudiar Node.js', descripcion: 'Repasar Express y routing', completada: 0, categoria_id: 3 },
  { titulo: 'Ir al gimnasio', descripcion: 'Sesión de piernas', completada: 1, categoria_id: 4 },
  { titulo: 'Ver una película', descripcion: 'Comedia o drama', completada: 0, categoria_id: 5 }
];

// Insertar tareas
tareas.forEach((tarea) => {
   const { titulo, descripcion, completada, categoria_id } = tarea;
   db.query(
     'INSERT INTO tareas (titulo, descripcion, completada, categoria_id) VALUES (?, ?, ?, ?)',
     [titulo, descripcion, completada, categoria_id],
     (err) => {
       if (err) console.error('Error insertando tarea:', err.message);
     }
   );
 });

console.log('✅ Datos de prueba insertados');
