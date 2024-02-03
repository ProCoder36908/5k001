// common.js

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;

    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');
}

// Function to set the username in localStorage
function setUsername() {
    const storedUsername = localStorage.getItem('username');
    const userDisplay = document.getElementById('user-display');

    if (storedUsername) {
        userDisplay.textContent = storedUsername;
    }
}

// Function to save and load data from local storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
}

// Function to save and load notes from local storage
function saveNotes() {
    const notesList = document.getElementById('notes-list');
    const notes = Array.from(notesList.children).map(item => item.textContent);
    saveData('notes', notes);
}

function loadNotes() {
    const notesList = document.getElementById('notes-list');
    const storedNotes = loadData('notes');

    if (storedNotes) {
        storedNotes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.textContent = note;
            notesList.appendChild(listItem);
        });
    }
}

// Function to save and load calendar events from local storage
function saveCalendarEvents(events) {
    saveData('calendarEvents', events);
}

function loadCalendarEvents() {
    return loadData('calendarEvents') || [];
}

// Function to save and load tasks from local storage
function saveTasks(tasks) {
    saveData('tasks', tasks);
}

function loadTasks() {
    return loadData('tasks') || [];
}

// Add more common functions as needed
