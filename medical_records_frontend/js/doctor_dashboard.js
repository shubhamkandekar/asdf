// Function to fetch and display the list of patients assigned to the doctor
const fetchPatients = async () => {
    try {
        // Make a GET request to fetch the list of patients
        const response = await fetch('/api/doctor/patients');

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const patients = await response.json();

            // Display the list of patients in the DOM
            const patientList = document.getElementById('patient-list');
            patientList.innerHTML = ''; // Clear previous content

            patients.forEach(patient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${patient.name} - Age: ${patient.age}, Gender: ${patient.gender}`;
                patientList.appendChild(listItem);
            });
        } else {
            // Display an error message if fetching patients failed
            alert('Failed to fetch patients. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the list of patients when the page loads
window.addEventListener('load', fetchPatients);
