const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definisi Route
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
// biasanya put itu overwrite sedang kan patch akan mengubah data
// PENTING: Export routernya
module.exports = router;
// dari / akan ada arah ke sub website lain nah itu root main disitu
//