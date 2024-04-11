// Function to handle login form submission
const handleLogin = async (event) => {
    event.preventDefault();

    // Get the username and password from the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Make a POST request to the login endpoint with the username and password
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Check if the login was successful
        if (response.ok) {
            // Redirect the user to the appropriate dashboard based on their role
            const { role } = await response.json();
            if (role === 'doctor') {
                window.location.href = '/doctor_dashboard.html';
            } else if (role === 'patient') {
                window.location.href = '/patient_dashboard.html';
            }
        } else {
            // Display an error message if login failed
            const { error } = await response.json();
            alert(error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};

// Add event listener to the login form
document.getElementById('login-form').addEventListener('submit', handleLogin);
