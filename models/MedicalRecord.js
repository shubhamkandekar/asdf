// models/MedicalRecord.js

const mongoose = require('mongoose');

// Define the schema for the MedicalRecord model
const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
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
    bloodTest: String,
    urineTest: String,
    ecg: String,
    mriScan: String,
    ctScan: String,
    xray: String,
    labTest: String
});

// Create and export the MedicalRecord model based on the schema
module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
