const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController')
const auth = require('../middleware/authorization')

router.post('/',auth,carritoController.carritoCliente);
router.post('/producto',carritoController.agregarProducto);
router.delete('/producto',carritoController.eliminarProducto);



module.exports = router;