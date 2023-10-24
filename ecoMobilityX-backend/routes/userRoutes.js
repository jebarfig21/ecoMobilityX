const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const auth = require('../middleware/authorization')


router.post('/create',userController.createUserController);
router.post('/login',userController.loginUserController);
router.get('/verify',auth,userController.verifyUserController);

router.delete('/',userController.deleteUserController);
router.put('/:id',userController.updateUserController);

//router.get('/:id',userController.readOneRequest);



module.exports = router;