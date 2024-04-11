// routes/doctors.js

const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Create a new doctor
router.post('/', async (req, res) => {
    try {
        const doctor = new Doctor({
            name: req.body.name,
            specialization: req.body.specialization,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        });
        const savedDoctor = await doctor.save();
        res.json(savedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific doctor
router.get('/:id', getDoctor, (req, res) => {
    res.json(res.doctor);
});

// Middleware function to get doctor by id
async function getDoctor(req, res, next) {
    let doctor;
    try {
        doctor = await Doctor.findById(req.params.id);
        if (doctor == null) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.doctor = doctor;
    next();
}

module.exports = router;
