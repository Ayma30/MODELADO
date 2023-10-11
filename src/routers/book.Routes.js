import { Router } from 'express';
import { bookControllers } from '../controllers/books.controllers.js';



const bookRouter = Router();



//rutas
bookRouter.get('/', bookControllers.getLibros);
bookRouter.post('/', bookControllers.crearLibro);
bookRouter.get('/:id', bookControllers.getLibro);
bookRouter.put('/:id', bookControllers.actualizarLibro);
bookRouter.delete('/:id', bookControllers.eliminarLibro);


export  default bookRouter
