document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform validation if needed

        // Send registration data to the server using fetch or any other method
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful registration
            console.log(data);
            alert('Registration successful!');
        })
        .catch(error => {
            // Handle errors
            console.error('There was an error with the registration:', error);
            alert('Registration failed. Please try again later.');
        });
    });
});
