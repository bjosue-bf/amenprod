// Fonction pour gérer le défilement fluide
function faireDefilerVersSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Ajouter des écouteurs d'événements aux liens du menu
document.querySelectorAll('nav a').forEach(lien => {
    lien.addEventListener('click', (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        const cible = lien.getAttribute('href').substring(1); // Récupérer l'ID de la section
        faireDefilerVersSection(cible);

        // Fermer le menu mobile après avoir cliqué sur un lien
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav');
            const hamburger = document.querySelector('.hamburger');
            nav.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});

// Gestion du menu hamburger
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

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
