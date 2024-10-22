import mongoose from 'mongoose';

const experienciaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  empresa: {
    type: String,
    required: [true, 'La empresa es obligatoria'],
    trim: true
  },
  fechaInicio: {
    type: Date,
    required: [true, 'La fecha de inicio es obligatoria']
  },
  fechaFin: {
    type: Date
  },
  actual: {
    type: Boolean,
    default: false
  },
  tecnologias: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

export default mongoose.model('Experiencia', experienciaSchema);