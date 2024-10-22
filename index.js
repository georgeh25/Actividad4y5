import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db_Mongoose.js';
import experienciasRoutes from './routes/experienciasRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Inicializar express
const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/experiencias', experienciasRoutes);

// Ruta por defecto
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Experiencias' });
});

// Puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});