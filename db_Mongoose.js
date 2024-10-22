import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('MongoDB Atlas conectado correctamente');
        return connection;
    } catch (error) {
        console.error('Error de conexión a MongoDB Atlas:', error.message);
        process.exit(1);
    }
};

export default connectDB;