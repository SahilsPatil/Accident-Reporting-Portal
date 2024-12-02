// routes/accidentRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllAccidents,
    getAccidentById,
    updateAccidentById,
    deleteAccidentById,
} = require('../controllers/accidentController');
const Accident = require('../models/Accident');

// Routes for accident data
router.get('/', getAllAccidents);              // Get all accidents
router.get('/:id', getAccidentById);           // Get specific accident by ID
router.put('/:id', updateAccidentById);        // Update specific accident by ID
router.delete('/:id', deleteAccidentById);     // Delete specific accident by ID

router.post('/report', async (req, res) => {
    try {
        const { spot, location, severity, type, description, images } = req.body;

        // Create a new accident report
        const newAccident = new Accident({
            spot,
            location,
            severity,
            type,
            description,
            images: images || [], // Array of image URLs or paths
            status: 'Open',
            time: new Date(),
        });

        const savedAccident = await newAccident.save();
        res.status(201).json({ message: 'Accident reported successfully', accident: savedAccident });
        // console.log(res);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while reporting the accident', error });
    }
});

module.exports = router;
