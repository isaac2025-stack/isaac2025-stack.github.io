// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// When the menu toggle button is clicked
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ===== CLOSE MENU WHEN A LINK IS CLICKED (MOBILE) =====
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
