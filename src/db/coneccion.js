import mongoose from 'mongoose';

const conectarBaseDeDatos = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Libreria', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

export default conectarBaseDeDatos;
