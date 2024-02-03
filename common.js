// common.js

// Function to generate a random emoji
function getRandomEmoji() {
    const emojis = ['😊', '📚', '✅', '🎉', '📆', '🚀', '💡', '🔍', '📌', '📝'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Function to set the username
function setUsername() {
    const storedUsername = localStorage.getItem('username');
    const userDisplay = document.getElementById('user-display');

    if (storedUsername) {
        userDisplay.textContent = storedUsername;
    }
}

// Function to toggle between light mode and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}
