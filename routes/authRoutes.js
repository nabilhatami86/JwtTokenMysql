// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/login', authController.login);
router.get('/register', authController.register)
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
