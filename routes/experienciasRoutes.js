import express from 'express';
import {
  getExperiencias,
  getExperienciaById,
  createExperiencia,
  updateExperiencia,
  deleteExperiencia
} from '../controllers/experienciasController.js';

const router = express.Router();

// Rutas para experiencias
router.get('/', getExperiencias);
router.get('/:id', getExperienciaById);
router.post('/', createExperiencia);
router.put('/:id', updateExperiencia);
router.delete('/:id', deleteExperiencia);

export default router;