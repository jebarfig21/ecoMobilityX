const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController')

router.post('/',carritoController.carritoCliente);
router.post('/producto',carritoController.agregarProducto);
router.delete('/producto',carritoController.eliminarProducto);



module.exports = router;