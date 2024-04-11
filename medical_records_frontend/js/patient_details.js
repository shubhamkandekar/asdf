// Function to fetch and display the details of a specific patient
const fetchPatientDetails = async () => {
    try {
        // Get the patient ID from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const patientId = urlParams.get('id');

        // Make a GET request to fetch the details of the patient
        const response = await fetch(`/api/patients/${patientId}`);

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const patient = await response.json();

            // Display the patient details in the DOM
            const patientDetailsContainer = document.getElementById('patient-details');
            patientDetailsContainer.innerHTML = ''; // Clear previous content

            // Create and append HTML elements to display patient details
            const detailsList = document.createElement('ul');
            detailsList.innerHTML = `
                <li>Name: ${patient.name}</li>
                <li>Age: ${patient.age}</li>
                <li>Gender: ${patient.gender}</li>
                <li>Prescription: ${patient.prescription}</li>
                <li>Remarks: ${patient.remarks}</li>
            `;
            patientDetailsContainer.appendChild(detailsList);
        } else {
            // Display an error message if fetching patient details failed
            alert('Failed to fetch patient details. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the details of the patient when the page loads
window.addEventListener('load', fetchPatientDetails);
