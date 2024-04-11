// routes/hospitals.js

const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

// Create a new hospital
router.post('/', async (req, res) => {
    try {
        const hospital = new Hospital({
            name: req.body.name,
            address: req.body.address,
            specialization: req.body.specialization
        });
        const savedHospital = await hospital.save();
        res.json(savedHospital);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all hospitals
router.get('/', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific hospital
router.get('/:id', getHospital, (req, res) => {
    res.json(res.hospital);
});

// Middleware function to get hospital by id
async function getHospital(req, res, next) {
    let hospital;
    try {
        hospital = await Hospital.findById(req.params.id);
        if (hospital == null) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.hospital = hospital;
    next();
}

module.exports = router;
