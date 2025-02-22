// Fonction pour afficher les sections au défilement
function afficherSectionsAuDefilement() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

// Écouteur d'événement pour le défilement
window.addEventListener('scroll', afficherSectionsAuDefilement);

// Appliquer l'affichage des sections au chargement de la page
window.addEventListener('load', afficherSectionsAuDefilement);

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
