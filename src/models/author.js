import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    apellido: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    biografia: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 3
    },
});

export const Autor = mongoose.model('autor', autorSchema);

export const autorService = {
    async getAutores() {
        try {
            return await Autor.find();
        } catch (error) {
            throw error;
        }
    },

    async getAutor(id) {
        try {
            return await Autor.findById(id);
        } catch (error) {
            throw error;
        }
    },

    async crearAutor(autor) {
        try {
            return await Autor.create(autor);
        } catch (error) {
            throw error;
        }
    },

    async actualizarAutor(id, autor) {
        try {
            return await Autor.findByIdAndUpdate(id, autor, { new: true }); //devuelve el objeto actualizado
        } catch (error) {
            throw error;
        }
    },

    async eliminarAutor(id) {
        try {
            return await Autor.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}