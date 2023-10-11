import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; // Importar la función fileURLToPath para convertir la URL en una ruta válida
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import conectarBaseDeDatos from './db/coneccion.js';
import bookRouters from './routers/book.Routes.js'; 
import authorRouters from './routers/author.Routes.js'; 

const app = express();

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middlewares
app.use(express.json());
app.use(express.static(path.resolve('./src/public')))
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
  })
);
app.use(morgan("tiny"));

// Usar la variable __dirname para establecer la vista
app.set("views", path.join(import.meta.url, "views"));




// Conectar a la base de datos
conectarBaseDeDatos();

const PORT = process.env.PORT || 3000;

// Rutas

app.use('/libros', bookRouters); 
app.use('/autores', authorRouters); // Author

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

//

