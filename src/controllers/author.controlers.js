import { autorService } from '../models/author.js';

export const authorControllers = {
    async getAutores(req, res) {
        try {
            const autores = await autorService.getAutores();
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getAutor(req, res) {
        try {
            const autor = await autorService.getAutor(req.params.id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async crearAutor(req, res) {
        try {
            const autor = await autorService.crearAutor(req.body);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async actualizarAutor(req, res) {
        try {
            const autor = await autorService.actualizarAutor(req.params.id, req.body);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async eliminarAutor(req, res) {
        try {
            const autor = await autorService.eliminarAutor(req.params.id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}