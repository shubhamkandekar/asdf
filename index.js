const express = require("express");
const connectDB = require('./config/db.js')
require("dotenv").config();
connectDB();
// Initialize Express app
const app = express();

app.use(express.json());

// Import routes
const hospitalsRoute = require("./routes/hospitals.js");
const doctorsRoute = require("./routes/doctors.js");
const patientsRoute = require("./routes/patients.js");
const medicalRecordsRoute = require("./routes/medicalRecords.js");

// Use routes
app.use("/api/hospitals", hospitalsRoute);
app.use("/api/doctors", doctorsRoute);
app.use("/api/patients", patientsRoute);
app.use("/api/medicalRecords", medicalRecordsRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
