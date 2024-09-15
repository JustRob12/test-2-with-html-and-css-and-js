// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form inputs
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            messageDiv.textContent = 'All fields are required.';
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            messageDiv.textContent = 'Passwords do not match.';
            return;
        }

        // Clear previous message and give success feedback
        messageDiv.textContent = '';
        messageDiv.style.color = 'green';
        messageDiv.textContent = `Registration successful! Welcome, ${name}!`;

        // Optionally, save data to localStorage (simulating a backend)
        saveUserData({ name, email, password });
        
        // Clear form fields
        form.reset();
    });

    // Save user data (for demo purposes, we're using localStorage)
    function saveUserData(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
});
