// common.js

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const nav = document.querySelector('nav');

    // Toggle dark mode class on body and nav
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
}

// Function to set the username in localStorage
function setUsername() {
    const storedUsername = localStorage.getItem('username');
    const userDisplay = document.getElementById('user-display');

    if (storedUsername) {
        userDisplay.textContent = storedUsername;
    }
}

// Add more common functions as needed
