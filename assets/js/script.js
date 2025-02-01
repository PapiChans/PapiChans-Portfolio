    // -------------------------------
    // Preloader
    // -------------------------------
    const preloader = document.querySelector(".preloader")

    window.onload = function() {
    // This code will set the opacity and display of a prelaoder to none
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.transition = '0.5s ease-in-out';
        setTimeout(() => {
        preloader.style.display = "none";
        }, 1200)
    }, 1000);
    };

document.addEventListener('DOMContentLoaded', function() {
    // -------------------------------
    // Changing the Theme
    // -------------------------------

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


    // -------------------------------
    // Changing the Color Palette
    // -------------------------------


    // Get all the color choices
    const colorChoices = document.querySelectorAll('.color-choice');
    const colorMenu = document.querySelector('.theme-pallete-menu'); // Get the Menu
    document.documentElement.style.setProperty('--pallete-clr', `var(--pallete-clr-red)`); // Set the Default Color as red

    // Get the Color Palette Toggle Button
    const colorMenuButton = document.getElementById('color-pallete-button');

    // Toggle the Color Palette Menu
    colorMenuButton.addEventListener('click', () => {
        // Toggle display between show and hide
        if (colorMenu.style.display == 'block') {
            colorMenu.classList.toggle('show');
            setTimeout(() => {
                colorMenu.style.display = 'none';
            },200);
        }
        else {
            colorMenu.style.display = 'block'
            setTimeout(() => {
                colorMenu.classList.toggle('show');
            },50);
        }
    });

    // Using Loop, to finds the clicked color
    colorChoices.forEach(choice => {
        choice.addEventListener('click', () => {
            // Get the color from the data-color attribute
            const color = choice.getAttribute('data-color');
            
            // Set the --pallete-clr variable based on the selected color
            document.documentElement.style.setProperty('--pallete-clr', `var(--pallete-clr-${color})`);

            // hides the Color Menu
            colorMenu.classList.toggle('show');
            setTimeout(() => {
                colorMenu.style.display = 'none';
            },200);
        });
    });

    // -------------------------------
    // Navbar Related
    // -------------------------------

    // Get the icons
    const navbarToggleIcon1 = document.querySelector('.open-navbar');
    const navbarToggleIcon2 = document.querySelector('.close-navbar');

    // Get Overlay
    const overlay = document.querySelector('.overlay');

    // Get the Div for the icon
    const menuDiv = document.querySelector('.navbar-button-area');

    // Getting the navbar
    const navBar = document.querySelector('.navbar');

    // Get the Navbar list
    const navBarContent = document.querySelector('.navbar-content')

    // Declaring the navbar extended variale
    let navBarExtended = false;

    menuDiv.addEventListener('click', (e) => {
        if (navBarExtended == false) {
            navBarExtended = true;
            navBar.style.height = '280px';
            iconTransition (navbarToggleIcon1, navbarToggleIcon2);
            overlay.style.display ='block';
        }
        else {
            navBarExtended = false;
            navBar.style.height = '65px';
            iconTransition (navbarToggleIcon2, navbarToggleIcon1);
            overlay.style.display ='none';
        }
    })

    // Function to Animation on the Nav Bar Icons
    function iconTransition(icon1, icon2) {
    // Rotate icon1 and fade it out
    icon1.style.transition = "transform 0.2s ease,";
    icon1.style.transform = "rotateX(70deg)";
  
    // After icon1 disappears, show icon2 and rotate it into position
    setTimeout(() => {
      icon1.style.display = "none";  // Actually hide it after transition completes
      icon2.style.display = "unset"; // Make icon2 visible
      icon2.style.transform = "rotateX(70deg)";
    }, 200); // This matches the time taken for the rotation and opacity transition
    
    setTimeout(() => {
      icon2.style.transition = "transform 0.2s ease";
      icon2.style.transform = "rotateX(0deg)";
    }, 250);
  }

    // Match Media Query, This will disabled NavBar Respopnsive on Large Devices
    var navBarDeactivate = window.matchMedia("(max-width: 769px)");

    navBarDeactivate.addEventListener("change", function() {
        navBarExtended = false
        iconTransition (navbarToggleIcon2, navbarToggleIcon1);
        navBar.style.height = '65px';
        overlay.style.display = 'none';
    });

    // Getting the Tabs
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const target = document.querySelector(tab.dataset.tabTarget);

            // Remove 'active' from all tab contents
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
                tabContent.style.display = 'none';
            });

            // Remove 'active' from all tabs and reset navBar settings
            tabs.forEach(tab => {
                tab.classList.remove('active');
                navBar.style.height = '65px';
                navBarExtended = false;
                iconTransition(navbarToggleIcon2, navbarToggleIcon1);
                overlay.style.display ='none';
            });

            target.style.display = 'block';

            // Add 'active' to the clicked tab and its associated content
            tab.classList.add('active');
            setTimeout(() => {
                target.classList.add('active');
            }, 10);
        });
    });

    // -------------------------------
    // Library: Tippy JS
    // -------------------------------

    // Get Phone Number Button and Gmail
    tippy('#call-button', {
        content: "+63 929 635 2760",
        placement: 'bottom',
        arrow: true,
        animation: 'fade',
        duration: 300,
    });

    tippy('#mail-button', {
        content: "chris.altiche123@gmail.com",
        placement: 'bottom',
        arrow: true,
        animation: 'fade',
        duration: 300,
    });

    tippy('#location-button', {
        content: "Norzagaray, Bulacan",
        placement: 'bottom',
        arrow: true,
        animation: 'fade',
        duration: 300,
    });

    tippy('#time-button', {
        content: `Last Updated: ` + document.lastModified,
        placement: 'bottom',
        arrow: true,
        animation: 'fade',
        duration: 300,
    });
});