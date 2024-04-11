// Function to fetch and display the list of hospitals
const fetchHospitals = async () => {
    try {
        // Make a GET request to fetch the list of hospitals
        const response = await fetch('/api/hospitals');

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON response
            const hospitals = await response.json();

            // Display the list of hospitals in the DOM
            const hospitalListContainer = document.getElementById('hospital-list');
            hospitalListContainer.innerHTML = ''; // Clear previous content

            // Create and append HTML elements to display hospital details
            const list = document.createElement('ul');
            hospitals.forEach(hospital => {
                const listItem = document.createElement('li');
                listItem.textContent = hospital.name;
                list.appendChild(listItem);
            });
            hospitalListContainer.appendChild(list);
        } else {
            // Display an error message if fetching hospital list failed
            alert('Failed to fetch hospital list. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Fetch and display the list of hospitals when the page loads
window.addEventListener('load', fetchHospitals);
