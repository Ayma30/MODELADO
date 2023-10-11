import { libroService } from "../models/books.js";


export const bookControllers = {
    async getLibros(req, res) {
        try {
            const libros = await libroService.getLibros();
            res.status(200).json(libros);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getLibro(req, res) {
        try {
            const libro = await libroService.getLibro(req.params.id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async crearLibro(req, res) {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                res.status(400).send("No se adjuntaron archivos.");
                return;
              }
              const file = req.files.portada;
              const filename = file.name;
              let path = `./uploads/${filename}`;

              file.mv(path, async (err)=>{
                if(err){
                    res.send('error')
                } else {
                    console.log(req.body);  
                    await libroService.crearLibro({...req.body, coverImage: path});

                    return res.json({
                        res: 'Libro creado correctamente'
                    })
                }
              })
             
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async actualizarLibro(req, res) {
        try {
            const libro = await libroService.actualizarLibro(req.params.id, req.body);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async eliminarLibro(req, res) {
        try {
            const libro = await libroService.eliminarLibro(req.params.id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}