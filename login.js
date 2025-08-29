// Simple login popup functionality
document.addEventListener('DOMContentLoaded', () => {
    // Close buttons functionality
    const closeButtons = document.querySelectorAll('.close-login');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove the popup from URL and close it
            history.pushState("", document.title, window.location.pathname);
            document.querySelector('.login-popup').style.display = 'none';
        });
    });

    // Handle escape key to close popup
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.login-popup').style.display === 'grid') {
            history.pushState("", document.title, window.location.pathname);
            document.querySelector('.login-popup').style.display = 'none';
        }
    });

    // Close popup when clicking outside
    document.querySelector('.login-popup').addEventListener('click', (e) => {
        if (e.target.classList.contains('login-popup')) {
            history.pushState("", document.title, window.location.pathname);
            document.querySelector('.login-popup').style.display = 'none';
        }
    });

    // Toggle between login and signup
    const loginLink = document.querySelector('a[href="#login-section"]');
    const signupLink = document.querySelector('a[href="#signup-section"]');

    loginLink?.addEventListener('click', () => {
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    });

    signupLink?.addEventListener('click', () => {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('signup-section').style.display = 'block';
    });
}); 