const CarritoModel = require('../models/carrito_model');
const ProductsModel = require('../models/products_model');

async function carritoCliente(req, res){
  const clienteId = req.user.id // Obtén el ID del cliente desde el middleware
    try {
      const carrito = await CarritoModel.Carrito.findOne({ cliente: clienteId, status: 'activo' }).populate('productos.producto');
      if (carrito) {
        console.log(carrito)
        res.status(200).json(carrito);
      } else {
        res.status(404).json({ error: 'Carrito no encontrado para el cliente proporcionado' });
      }
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  async function agregarProducto(req, res) {
    
    const clienteId = req.body.idCliente // Obtén el ID del cliente desde la solicitud POST
    const productoId = req.body.idProducto; // Obtén el ID del producto desde la solicitud POST
    
    console.log(req.body)
    
    try {
      
      // Verifica si el producto existe
      const producto = await ProductsModel.Producto.findById(productoId);

      if (!producto) {
        console.log("No encuntroa el producto")
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
  
      // Encuentra el carrito del cliente
      let carrito = await CarritoModel.Carrito.findOne({ cliente: clienteId, status: 'activo' });
  
      // Si no hay carrito activo para el cliente, crea uno nuevo
      if (!carrito) {
        carrito = new CarritoModel.Carrito({
          cliente: clienteId,
          productos: [],
          status: 'activo',
          total: 0
        });
      }
  
      // Agrega el producto al carrito
      const productoEnCarrito = carrito.productos.find(item => item.producto.equals(productoId));

      // Si el producto está en el carrito, aumenta la cantidad, sino, agrega el producto al carrito con cantidad 1
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
      } else {
        carrito.productos.push({ producto: productoId, cantidad: 1 });
      }
        carrito.total += producto.precio;
  
      // Guarda el carrito actualizado en la base de datos
      await carrito.save();
  
      res.status(200).json(carrito);
    } catch (error) {
      console.log("andaFallandoAgregarCarrito")
      //console.error('Error al agregar el producto al carrito:', error);
      //res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async function eliminarProducto(req, res) {
    const clienteId = req.body.clienteId; // Obtén el ID del cliente desde la solicitud POST
    const productoId = req.body.productoId; // Obtén el ID del producto desde la solicitud POST
  
    try {
      // Encuentra el carrito del cliente
      let carrito = await CarritoModel.Carrito.findOne({ cliente: clienteId, status: 'activo' });
  
      // Si no hay carrito activo para el cliente, devuelve un error
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado para el cliente proporcionado' });
      }
  
      // Filtra los productos para eliminar el producto especificado del carrito
      carrito.productos = carrito.productos.filter(item => !item.producto.equals(productoId));
  
      
      // Guarda el carrito actualizado en la base de datos
      await carrito.save();
  
      res.status(200).json(carrito);
    } catch (error) {
        console.error('Error al eliminar el producto del carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }
    
  

module.exports = {
    carritoCliente,
    agregarProducto,
    eliminarProducto
};
