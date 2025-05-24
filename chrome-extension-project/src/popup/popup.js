document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const status = document.getElementById('status');
        if (tabs.length === 0) {
            status.textContent = 'No active tab found.';
            return;
        }
        const url = tabs[0].url || '';
        if (url.includes('zoom.com')) {
            status.textContent = 'This tab is a Zoom page!';
        } else if (url.includes('mail.google.com')) {
            status.textContent = 'This tab is a Gmail page!';
        } else {
            status.textContent = 'This tab is NOT a Zoom or Gmail page.';
        }
    });
});