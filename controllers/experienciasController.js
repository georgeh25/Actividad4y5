import Experiencia from '../models/Experiencia.js';

// Obtener todas las experiencias
export const getExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find().sort({ fechaInicio: -1 });
    res.json(experiencias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las experiencias', error: error.message });
  }
};

// Obtener una experiencia por ID
export const getExperienciaById = async (req, res) => {
  try {
    const experiencia = await Experiencia.findById(req.params.id);
    if (!experiencia) {
      return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
    }
    res.json(experiencia);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la experiencia', error: error.message });
  }
};

// Crear nueva experiencia
export const createExperiencia = async (req, res) => {
  try {
    const nuevaExperiencia = new Experiencia(req.body);
    const experienciaSaved = await nuevaExperiencia.save();
    res.status(201).json(experienciaSaved);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la experiencia', error: error.message });
  }
};

// Actualizar experiencia
export const updateExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!experiencia) {
      return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
    }
    res.json(experiencia);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar la experiencia', error: error.message });
  }
};

// Eliminar experiencia
export const deleteExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
    if (!experiencia) {
      return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
    }
    res.json({ mensaje: 'Experiencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la experiencia', error: error.message });
  }
};