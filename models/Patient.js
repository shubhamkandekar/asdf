// models/Patient.js

const mongoose = require('mongoose');

// Define the schema for the Patient model
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    prescription: {
        type: String,
        default: ''
    },
    remarks: {
        type: String,
        default: ''
    }
});

// Create and export the Patient model based on the schema
module.exports = mongoose.model('Patient', patientSchema);
