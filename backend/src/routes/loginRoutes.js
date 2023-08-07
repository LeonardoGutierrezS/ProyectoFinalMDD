const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

// Ruta para usar login
router.post('/login', loginController.login);

//Ruta para registrar usuario
router.post('/register', loginController.register);

module.exports = router;
