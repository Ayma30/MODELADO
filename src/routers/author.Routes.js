import { Router } from 'express';
import { authorControllers } from '../controllers/author.controlers.js';

const authorRouters = Router();

authorRouters.post('/', authorControllers.crearAutor);
authorRouters.get('/', authorControllers.getAutores);
authorRouters.get('/:id', authorControllers.getAutor);
authorRouters.put('/:id', authorControllers.actualizarAutor);
authorRouters.delete('/:id', authorControllers.eliminarAutor);

export default authorRouters
