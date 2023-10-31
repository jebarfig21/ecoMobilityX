const mongoose = require('mongoose');

const carritoSchema = mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
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
  ],
  status: {
    type: String,
    enum: ['activo', 'inactivo', 'completado'],
    default: 'activo',
    required: true
  },
  total: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  }
});

const Carrito = mongoose.model('Carrito', carritoSchema);

module.exports = {
  Carrito
};