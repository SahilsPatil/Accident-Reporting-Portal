// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getAdmins,
    getEmergencyPersonnel,
    getPublicUsers,
    updateUserById,
    deleteUserById,
    addUser
} = require('../controllers/userController');


// Get all users
router.get('/all', getAllUsers);

// Get admins only
router.get('/admins', getAdmins);

// Get police, ambulance, and fire personnel only
router.get('/emergency', getEmergencyPersonnel);

// Get public users only
router.get('/public', getPublicUsers);

// Update a user by ID
router.put('/update/:id', updateUserById);

// Delete a user by ID
router.delete('/delete/:id', deleteUserById);

// Add a new user
router.post('/add', addUser);

module.exports = router;
