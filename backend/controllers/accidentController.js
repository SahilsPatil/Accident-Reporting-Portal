// controllers/accidentController.js
const Accident = require('../models/Accident');

// Get all accidentss
exports.getAllAccidents = async (req, res) => {
    try {
        const accidentss = await Accident.find();
        res.json(accidentss);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get specific accident by ID
exports.getAccidentById = async (req, res) => {
    try {
        const accident = await Accident.findById(req.params.id);
        if (!accident) return res.status(404).json({ message: 'Accident not found' });
        res.json(accident);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update specific accident by ID
exports.updateAccidentById = async (req, res) => {
    try {
        const updatedAccident = await Accident.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAccident) return res.status(404).json({ message: 'Accident not found' });
        res.json(updatedAccident);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete specific accident by ID
exports.deleteAccidentById = async (req, res) => {
    try {
        const accident = await Accident.findByIdAndDelete(req.params.id);
        if (!accident) return res.status(404).json({ message: 'Accident not found' });
        res.json({ message: 'Accident deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
