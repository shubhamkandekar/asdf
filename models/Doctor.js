// models/Doctor.js

const mongoose = require('mongoose');

// Define the schema for the Doctor model
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

// Create and export the Doctor model based on the schema
module.exports = mongoose.model('Doctor', doctorSchema);
