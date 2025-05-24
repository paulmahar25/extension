document.addEventListener('DOMContentLoaded', function() {
    // This script will run when the DOM is fully loaded
    console.log('Content script loaded');

    // Example: Change the background color of the page
    document.body.style.backgroundColor = 'lightblue';

    // Example: Add a button to the page
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '1000';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
});