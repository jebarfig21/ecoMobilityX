const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/',userController.createUserController);
//router.get('/:id',userController.readOneRequest);
//router.put('/:id',userController.updateOneRequest);
//router.delete('/:id',userController.deleteOneRequest);



module.exports = router;