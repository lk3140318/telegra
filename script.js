// script.js

// Set current date dynamically
const publishDateElement = document.getElementById('publishDate');
const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
publishDateElement.textContent = currentDate;

// Optional: Author name setting dynamically
const authorNameElement = document.getElementById('authorName');
authorNameElement.textContent = 'Your Name'; // Change this to the actual author name
