
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelectorAll('nav li');

menuIcon.addEventListener('click', () => {
    navLinks.forEach(link => {
        link.classList.toggle('show');
    });
});