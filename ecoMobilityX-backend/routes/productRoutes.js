const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController')


router.get('/:id',productController.readOneRequest);
router.get('/',productController.readAllRequest);



module.exports = router;