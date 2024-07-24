// Navbar Responsive

const toggleButton = document.querySelector('.nav-button');
const navCard = document.querySelector('.nav-card');
const navMenu = document.querySelector('.nav-ul');
const toggleIcon = document.querySelector('.toggle-button ion-icon');

let isExpanded = false;

toggleButton.addEventListener('click', function() {
    // Toggle the state
    isExpanded = !isExpanded;

    // Set the height based on the state
    navCard.style.transition = 'height 0.3s ease'; // Smooth transition
    navCard.style.height = isExpanded ? '300px' : '50px';
    navCard.style.overflowY = isExpanded ? 'scroll' : 'hidden';
    navMenu.style.display = isExpanded ? 'flex' : 'none';

    // Change the toggle button icon based on the state
    toggleIcon.style.transition = 'transform 0.3s ease'; // Smooth transition
    if (isExpanded) {
        toggleIcon.setAttribute('name', 'close-outline');
        toggleIcon.style.transform = 'rotate(180deg)'; // Rotate icon for close
    } else {
        toggleIcon.setAttribute('name', 'menu-outline');
        toggleIcon.style.transform = 'rotate(0deg)'; // Rotate icon back to original
    }
});

//Tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
      navCard.style.height = '50px';
      navCard.style.overflowY = 'hidden';
      toggleIcon.setAttribute('name', 'menu-outline');
      isExpanded = false;
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})