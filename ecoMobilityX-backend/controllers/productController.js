const ProductsModel = require('../models/products_model');


async function createProduct(req, res) {
    const nuevoProducto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria: req.body.categoria,
        cantidadDisponible: req.body.cantidadDisponible,
        imagen: req.body.imagen
      }
      
      await ProductsModel.Producto.create(nuevoProducto)

      res.status(201).json({message: "New resource created!"});
    }

    async function getAllProduct(req,res){
        try {
            const productos = await ProductsModel.Producto.find({});
            res.status(200).json(productos);
          } catch (error) {
            console.error('Error al obtener los productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
          }

    }

    async function getOneProduct(req,res){
        const id = req.params.id
        ProductsModel.Producto.findOne({_id:id}).then((producto=>{
            try {
                if (producto) {
                    res.status(200).json(producto);
                  } else {
                    res.status(404).json({ error: 'Producto no encontrado' });
                  }
                } 
              catch (error) {
                console.error('Error al obtener los productos:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
              }
            }))
       
    }

    module.exports = {
        createProduct,
        getAllProduct,
        getOneProduct
      };
      



