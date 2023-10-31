
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  categoria: {
    type: String,
    required: true,
    trim: true
  },
  cantidadDisponible: {
    type: Number,
    required: true,
    min: 0
  },
  imagen: {
    type: String, // Puedes almacenar la URL de la imagen del producto
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

const Producto = mongoose.model('Producto', ProductSchema);

module.exports = {
  Producto
};
