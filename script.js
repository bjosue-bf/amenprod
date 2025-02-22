// Fonction pour afficher un message d'alerte (peut être utilisée pour des notifications)
function afficherMessage(message = "Bienvenue sur notre site web. Cliquez sur OK pour continuer !") {
    alert(message);
}

// Sélection des éléments du menu et du bouton hamburger
const menuToggle = document.querySelector('.menu-toggle'); // Le div qui contient le hamburger
const nav = document.querySelector('nav'); // La balise <nav>

// Écouteur d'événement pour le bouton hamburger (menu mobile)
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Bascule la classe "active" sur la navigation
    menuToggle.classList.toggle('open'); // Ajoute une classe pour animer le bouton hamburger
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
        setTimeout(() => {
            element.style.transition = "opacity 0.5s ease-in-out";
            element.style.opacity = 1; // Opacité finale à 1 (visible)
        }, 10); // Délai pour que la transition se déclenche
    } else {
        element.style.opacity = 0; // Opacité initiale à 1 (visible)
        setTimeout(() => {
            element.style.display = "none"; // Masquer après la transition
        }, 500); // Délai pour la durée de la transition
    }
}

// Fonction pour gérer l'affichage des avis clients (si nécessaire)
function afficherAvis(avis) {
    const avisContainer = document.querySelector('.avis-container');
    avisContainer.innerHTML = ''; // Vide le conteneur d'avis

    avis.forEach((avis) => {
        const avisElement = document.createElement('div');
        avisElement.classList.add('avis');
        avisElement.innerHTML = `
            <h3>${avis.nom}</h3>
            <p>${avis.commentaire}</p>
            <span>Note: ${avis.note}/5</span>
        `;
        avisContainer.appendChild(avisElement);
    });

    basculerVisibilite(avisContainer); // Affiche ou masque les avis avec une animation
}

// Exemple d'utilisation de la fonction afficherAvis
const avis = [
    { nom: "Jean Dupont", commentaire: "Très bon service, je recommande !", note: 5 },
    { nom: "Marie Curie", commentaire: "Site très intuitif et facile à utiliser.", note: 4 },
    { nom: "Pierre Durand", commentaire: "Excellent rapport qualité-prix.", note: 5 }
];

afficherAvis(avis);

// Ajout d'un écouteur d'événement pour fermer le menu lors du clic en dehors de celui-ci
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('open');
    }
});

// Ajout d'une animation au scroll pour les sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});
