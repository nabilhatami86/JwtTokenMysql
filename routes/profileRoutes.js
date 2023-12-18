// routes/profileRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');


const router = express.Router();

router.get('/add-profile-picture' ,authMiddleware, profileController.addProfilePicture);
router.get('/add-profile-picture:Id', authMiddleware, profileController.addProfilePicture)
router.get('/update-profile', authMiddleware, profileController.updateProfile)
router.get('/update-profile:Id', authMiddleware, profileController.updateProfile)
router.post('/add-profile-picture',authMiddleware, profileController.addProfilePicture);
router.put('/update-profile', authMiddleware, profileController.updateProfile);

module.exports = router;
