import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

export const Libro =  mongoose.model('Book', bookSchema);
//Objeto con metodos:)
export const libroService = {
  async getLibros() {
      try {
          return await Libro.find().populate('autor');
      } catch (error) {
          throw error;
      }
  },

  async getLibro(id) {
      try {
          return await Libro.findById(id);
      } catch (error) {
          throw error;
      }
  },

  async crearLibro(libro) {
      try {
          return await Libro.create(libro);
      } catch (error) {
          throw error;
      }
  },

  async actualizarLibro(id, libro) {
      try {
          return await Libro.findByIdAndUpdate(id, libro, { new: true }); //devuelve el objeto actualizado
      } catch (error) {
          throw error;
      }
  },

  async borrarLibro(id) {
      try {
          return await Libro.findByIdAndDelete(id);
      } catch (error) {
          throw error;
      }
  }
}