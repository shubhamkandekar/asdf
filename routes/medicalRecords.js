// routes/medicalRecords.js

const express = require('express');
const router = express.Router();
const MedicalRecord = require('../models/MedicalRecord');

// Create a new medical record
router.post('/', async (req, res) => {
    try {
        const medicalRecord = new MedicalRecord({
            patientId: req.body.patientId,
            doctorId: req.body.doctorId,
            hospitalId: req.body.hospitalId,
            bloodTest: req.body.bloodTest,
            urineTest: req.body.urineTest,
            ecg: req.body.ecg,
            mriScan: req.body.mriScan,
            ctScan: req.body.ctScan,
            xray: req.body.xray,
            labTest: req.body.labTest
        });
        const savedMedicalRecord = await medicalRecord.save();
        res.json(savedMedicalRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all medical records
router.get('/', async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find();
        res.json(medicalRecords);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific medical record
router.get('/:id', getMedicalRecord, (req, res) => {
    res.json(res.medicalRecord);
});

// Middleware function to get medical record by id
async function getMedicalRecord(req, res, next) {
    let medicalRecord;
    try {
        medicalRecord = await MedicalRecord.findById(req.params.id);
        if (medicalRecord == null) {
            return res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.medicalRecord = medicalRecord;
    next();
}

module.exports = router;
