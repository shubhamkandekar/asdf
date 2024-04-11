// Function to fetch and display the patient's medical record
const fetchMedicalRecord = async () => {
    try {
        // Make a GET request to fetch the patient's medical record
        const response = await fetch('/api/patient/medical-record');

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const medicalRecord = await response.json();

            // Display the medical record details in the DOM
            const medicalRecordContainer = document.getElementById('medical-record');
            medicalRecordContainer.innerHTML = ''; // Clear previous content

            // Create and append HTML elements to display medical record details
            const detailsList = document.createElement('ul');
            detailsList.innerHTML = `
                <li><strong>Patient Name:</strong> ${medicalRecord.patientName}</li>
                <li><strong>Age:</strong> ${medicalRecord.age}</li>
                <li><strong>Gender:</strong> ${medicalRecord.gender}</li>
                <li><strong>Complaints:</strong> ${medicalRecord.complaints}</li>
                <li><strong>Diagnosis Summary:</strong> ${medicalRecord.diagnosisSummary}</li>
                <li><strong>Prescription:</strong> ${medicalRecord.prescription}</li>
                <li><strong>Remarks:</strong> ${medicalRecord.remarks}</li>
            `;
            medicalRecordContainer.appendChild(detailsList);
        } else {
            // Display an error message if fetching medical record failed
            alert('Failed to fetch medical record. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the patient's medical record when the page loads
window.addEventListener('load', fetchMedicalRecord);
