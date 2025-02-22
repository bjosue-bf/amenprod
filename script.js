// Fonction pour afficher un message d'alerte (peut être utilisée pour des notifications)
function afficherMessage(message) {
    if (!message) {
        message = "Bienvenu sur notre site web. Cliquez sur OK pour continuer !"; // Message par défaut
    }
    alert(message);
}

// Sélection des éléments du menu et du bouton hamburger
const menuToggle = document.querySelector('.menu-toggle'); // Le div qui contient le hamburger
const nav = document.querySelector('nav'); // La balise <nav>

// Écouteur d'événement pour le bouton hamburger (menu mobile)
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Bascule la classe "active" sur la navigation
});

// Fonction pour changer la couleur de fond d'un élément avec une transition douce
function changerCouleurFond(element, couleur) {
    element.style.transition = "background-color 0.5s ease"; // Transition douce
    element.style.backgroundColor = couleur;
}

// Fonction pour afficher ou masquer un élément avec une animation de fondu
function basculerVisibilite(element) {
    if (element.style.display === "none" || !element.style.display) {
        element.style.display = "block";
        element.style.opacity = 0; // Opacité initiale à 0 (invisible)
        setTimeout(function () {
            element.style.transition = "opacity 0.5s ease-in-out";
            element.style.opacity = 1; // Opacité finale à 1 (visible)
        }, 10); // Délai pour que la transition se déclenche
    } else {
        element.style.opacity = 0; // Opacité initiale à 1 (visible)
        setTimeout(function () {
            element.style.display = "none"; // Masquer après la transition
        }, 500); // Délai pour la durée de la transition
    }
}

// Code pour le menu hamburger (plus simple et plus efficace)
// Plus besoin de sélectionner hamburger et nav une deuxième fois, on utilise ceux déclarés plus haut

// L'écouteur d'événement est déjà défini plus haut, on garde seulement ça :
// nav.classList.toggle('active'); // Bascule la classe "active" au clic


// Fonction pour gérer l'affichage des avis clients (si nécessaire)
// ... (votre code pour les avis clients)
