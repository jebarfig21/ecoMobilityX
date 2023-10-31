const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ]
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = {Pedido};