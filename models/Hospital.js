// models/Hospital.js

const mongoose = require('mongoose');

// Define the hospital schema
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
});

// Create and export the Hospital model
module.exports = mongoose.model('Hospital', hospitalSchema);
