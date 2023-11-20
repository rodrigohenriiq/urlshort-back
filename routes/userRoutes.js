const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/create', userController.createUser);

// Rota para fazer login
router.post('/login', userController.loginUser);


module.exports = router;
