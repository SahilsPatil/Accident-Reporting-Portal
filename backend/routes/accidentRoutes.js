// routes/accidentRoutes.js
const express = require('express');
const router = express.Router();
const Accident = require('../models/Accident');
const { getAllAccidents, getAccidentById, updateAccidentById, deleteAccidentById, } = require('../controllers/accidentController');
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

const imageDir = "./accidents/images"
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}
// const imageDir = '/tmp/images';
// if (!fs.existsSync(imageDir)) {
//     fs.mkdirSync(imageDir, { recursive: true });
// }

// Routes for accident data
router.get('/', getAllAccidents);              // Get all accidents
router.get('/:id', getAccidentById);           // Get specific accident by ID
router.put('/:id', updateAccidentById);        // Update specific accident by ID
router.delete('/:id', deleteAccidentById);     // Delete specific accident by ID

router.post('/report', async (req, res) => {
    try {
        const { spot, location, severity, type, description, images } = req.body;

        if (!images || !Array.isArray(images)) {
            return res.status(400).json({ message: "No images provided or invalid format." });
        }
        const savedImageNames = images.map((base64Image, index) => {
            const fileExtension = base64Image.match(/data:image\/(.*?);base64/)[1]; // Extract file type
            const uniqueName = `${uuidv4()}-${index}.${fileExtension}`;
            const imageBuffer = Buffer.from(base64Image.split(",")[1], "base64"); // Decode base64

            // Save image to disk
            fs.writeFileSync(path.join(imageDir, uniqueName), imageBuffer);

            return uniqueName; // Return saved filename
        });
        console.log(savedImageNames);
        

        let locationData = location;
        if (!location || !location.lat || !location.lng) {
            locationData = {
                lat: 12.9716,
                lng: 77.5946,
            };
        }

        // Create a new accident report
        const newAccident = new Accident({
            spot,
            location: locationData,
            severity,
            vehical: type,
            description,
            images: savedImageNames || [], // Array of image URLs or paths
            status: 'Open',
            time: new Date(),
        });

        const savedAccident = await newAccident.save();
        res.status(201).json({ message: 'Accident reported successfully', accident: savedAccident });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while reporting the accident', error });
    }
});

module.exports = router;
