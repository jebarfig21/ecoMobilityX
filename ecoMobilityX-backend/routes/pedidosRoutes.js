const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/pedidosController')

router.post('/',carritoController.crearPedido);
router.post('/all',carritoController.obtenerPedidos);
//router.get('/',carritoController.obtenerPedido);



module.exports = router;