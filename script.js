// Gestion du menu hamburger
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Fermer le menu mobile après avoir cliqué sur un lien
document.querySelectorAll('nav a').forEach(lien => {
    lien.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});
