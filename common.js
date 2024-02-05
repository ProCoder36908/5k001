// common.js

function initializePage(welcomeMessage = 'Welcome, User!') {
    setUsername();
    setWelcomeMessage(welcomeMessage);
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

function navigate(page) {
    location.href = page;
}

function setWelcomeMessage(message = '') {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = message;
}

// Add other common functions as needed
