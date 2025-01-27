document.addEventListener('DOMContentLoaded', () => {
    // Get the icons
    const themeToggleIcon1 = document.querySelector('.moon-icon');
    const themeToggleIcon2 = document.querySelector('.sun-icon');

    // Load the current theme from localStorage, default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);

    // Toggle visibility based on the theme
    toggleIcons(currentTheme);

    // Add event listener to toggle theme on click
    document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleIcons(newTheme);
    });

    // Function to toggle icon visibility
    function toggleIcons(theme) {
        if (theme === 'light') {
            themeToggleIcon1.style.display = 'none';
            themeToggleIcon2.style.display = 'block';
        } else {
            themeToggleIcon1.style.display = 'block';
            themeToggleIcon2.style.display = 'none';
        }
    }
});
