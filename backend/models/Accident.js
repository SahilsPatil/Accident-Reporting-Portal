// models/Accident.js
const mongoose = require('mongoose');

const AccidentSchema = new mongoose.Schema({
    spot: {
        type: String,
        required: true,
    },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    severity: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true,
    },
    type: {
        type: String,
        // required: true,
    },
    vehical: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open',
    },
    time: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
    images: {
        type: [String], default: [] // URLs or paths to images
    },
    videos: {
        type: [String], // URLs or paths to videos
    },
}, { collection: 'Accidents' });

module.exports = mongoose.model('Accident', AccidentSchema);
