// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    accidentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Accident', required: true },
    assignedUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignmentTime: { type: Date, default: Date.now },
    status: { type: String, enum: ['Open', 'In Progress', 'Completed'], default: 'Open' },
    type: { type: String, required: true }, // e.g., 'police', 'ambulance', 'fire'
    description: { type: String },
});

module.exports = mongoose.model('Job', JobSchema);
