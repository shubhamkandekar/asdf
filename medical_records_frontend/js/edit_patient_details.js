// Function to handle form submission for editing patient details
const editPatientDetails = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
        // Get the form input values
        const patientId = document.getElementById('patient-id').value;
        const name = document.getElementById('patient-name').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
        const prescription = document.getElementById('patient-prescription').value;
        const remarks = document.getElementById('patient-remarks').value;

        // Create a new patient object with the updated details
        const updatedPatient = {
            name,
            age,
            gender,
            prescription,
            remarks
        };

        // Make a PUT request to update the patient details
        const response = await fetch(`/api/patients/${patientId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPatient)
        });

        // Check if the request was successful
        if (response.ok) {
            // Redirect to the patient details page after successful update
            window.location.href = `/html/patient_details.html?id=${patientId}`;
        } else {
            // Display an error message if updating patient details failed
            alert('Failed to update patient details. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Event listener for form submission
const editPatientForm = document.getElementById('edit-patient-form');
editPatientForm.addEventListener('submit', editPatientDetails);
