import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());


// SERVIR CARPETA PUBLIC

app.use(express.static('public'));


//  CRUD ESTUDIANTES

// GET todos
app.get('/estudiantes', async (req, res) => {
  const result = await pool.query('SELECT * FROM estudiantes ORDER BY id ASC');
  res.json(result.rows);
});

// GET uno por id
app.get('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM estudiantes WHERE id=$1', [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }

  res.json(result.rows[0]);
});

// POST crear
app.post('/estudiantes', async (req, res) => {
  const { nombre, edad } = req.body;

  const result = await pool.query(
    'INSERT INTO estudiantes (nombre, edad) VALUES ($1, $2) RETURNING *',
    [nombre, edad]
  );

  res.json(result.rows[0]);
});

// PUT actualizar
app.put('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;

  const result = await pool.query(
    'UPDATE estudiantes SET nombre=$1, edad=$2 WHERE id=$3 RETURNING *',
    [nombre, edad, id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }

  res.json(result.rows[0]);
});

// DELETE eliminar
app.delete('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    'DELETE FROM estudiantes WHERE id=$1 RETURNING *',
    [id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }

  res.json({ mensaje: 'Estudiante eliminado correctamente' });
});

//      LEVANTAR SERVIDOR

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
