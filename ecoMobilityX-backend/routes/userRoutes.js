const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/',userController.createUserController);
router.delete('/',userController.deleteUserController);
router.put('/:id',userController.updateUserController);

//router.get('/:id',userController.readOneRequest);



module.exports = router;