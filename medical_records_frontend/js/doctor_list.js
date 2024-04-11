// Function to fetch and display the list of doctors
const fetchDoctors = async () => {
    try {
        // Make a GET request to fetch the list of doctors
        const response = await fetch('/api/doctors');

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const doctors = await response.json();

            // Display the list of doctors in the DOM
            const doctorListContainer = document.getElementById('doctor-list');
            doctorListContainer.innerHTML = ''; // Clear previous content

            // Create and append HTML elements to display doctor details
            const list = document.createElement('ul');
            doctors.forEach(doctor => {
                const listItem = document.createElement('li');
                listItem.textContent = doctor.name;
                list.appendChild(listItem);
            });
            doctorListContainer.appendChild(list);
        } else {
            // Display an error message if fetching doctor list failed
            alert('Failed to fetch doctor list. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the list of doctors when the page loads
window.addEventListener('load', fetchDoctors);
