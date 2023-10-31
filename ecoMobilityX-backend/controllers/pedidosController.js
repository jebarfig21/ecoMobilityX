const PedidosModel = require('../models/pedidos_model');

async function crearPedido(req, res) {
  const clienteId = req.body.clienteId; // Obtén el ID del cliente desde el cuerpo de la solicitud POST
  const productos = req.body.productos; // Obtén el arreglo de productos desde el cuerpo de la solicitud POST

  try {
    // Verifica si el cliente existe (puedes añadir lógica adicional aquí si es necesario)

    // Crea un nuevo objeto de pedido
    const nuevoPedido = new PedidosModel({
      cliente: clienteId,
      productos: productos
    });

    // Guarda el pedido en la base de datos
    await nuevoPedido.save();

    res.status(201).json({ mensaje: 'Pedido creado exitosamente', pedido: nuevoPedido });
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


async function obtenerPedidos(req, res) {
  const clienteId = req.body.clienteId; // Obtén el ID del cliente desde el cuerpo de la solicitud POST

  try {
    // Busca todos los pedidos relacionados con el cliente
    const pedidos = await PedidosModel.find({ cliente: clienteId });

    if (pedidos.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron pedidos para este cliente' });
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error('Error al obtener los pedidos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


module.exports = {
  crearPedido,
  obtenerPedidos
};
