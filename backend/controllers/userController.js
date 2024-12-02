// controllers/userController.js
const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get admins only
exports.getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' });
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get police, ambulance, and fire personnel only
exports.getEmergencyPersonnel = async (req, res) => {
    try {
        const emergencyPersonnel = await User.find({ role: { $in: ['police', 'ambulance', 'fire'] } });
        res.json(emergencyPersonnel);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get public users only
exports.getPublicUsers = async (req, res) => {
    try {
        const publicUsers = await User.find({ role: 'public' });
        res.json(publicUsers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Update a user by ID
exports.updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};