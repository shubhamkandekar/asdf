// Function to fetch and display the list of patients
const fetchPatients = async () => {
    try {
        // Make a GET request to fetch the list of patients
        const response = await fetch('/api/patients');

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const patients = await response.json();

            // Display the list of patients in the DOM
            const patientListContainer = document.getElementById('patient-list');
            patientListContainer.innerHTML = ''; // Clear previous content

            // Create and append HTML elements to display patient details
            const list = document.createElement('ul');
            patients.forEach(patient => {
                const listItem = document.createElement('li');
                listItem.textContent = patient.name;
                list.appendChild(listItem);
            });
            patientListContainer.appendChild(list);
        } else {
            // Display an error message if fetching patient list failed
            alert('Failed to fetch patient list. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the list of patients when the page loads
window.addEventListener('load', fetchPatients);
