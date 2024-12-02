// models/AccidentSummary.js
const mongoose = require('mongoose');

const accidentSummarySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    location: { type: String, required: true },
    count: { type: Number, default: 1 },
}, { collection: 'AccidentSummary' });

module.exports = mongoose.model('AccidentSummary', accidentSummarySchema);
