// routes/accidentSummaryRoutes.js
const express = require('express');
const router = express.Router();
const AccidentSummary = require('../models/AccidentSummary');

// Route to get all accident summaries
router.get('/all', async (req, res) => {
    try {
        console.log("Fetching all accident summaries");  // Log for debugging

        const allData = await AccidentSummary.find({}).sort({ date: -1 }); // Sort by date if needed

        if (allData.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        res.status(200).json(allData);
    } catch (error) {
        console.error('Error fetching all accident summaries:', error);
        res.status(500).json({ message: 'Server error while fetching data' });
    }
});

module.exports = router;
