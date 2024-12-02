const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    role: { type: String, default: "public" },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
});

module.exports = mongoose.model('User', userSchema);
