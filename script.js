// Fonction pour afficher un message d'alerte avec un texte dynamique
function afficherMessage(message) {
    if (!message) {
        message = "Bienvenu sur notre site web. Cliquez sur OK pour continuer !"; // Message par défaut
    }
    alert(message);
}

// Fonction pour changer la couleur de fond d'un élément avec une transition douce
function changerCouleurFond(element, couleur) {
    element.style.transition = "background-color 0.5s ease"; // Transition douce
    element.style.backgroundColor = couleur;
}

// Fonction pour afficher ou masquer un élément avec une animation de fondu
function basculerVisibilite(element) {
    if (element.style.display === "none" || !element.style.display) {
        element.style.display = "block";
        // Ajout d'une animation de fondu lorsque l'élément devient visible
        element.style.opacity = 0;
        setTimeout(function () {
            element.style.transition = "opacity 0.5s ease-in-out"; // Transition du fondu
            element.style.opacity = 1;
        }, 10); // Délai de 10ms pour que la transition commence
    } else {
        // Ajout d'une animation de fondu pour la disparition de l'élément
        element.style.opacity = 0;
        setTimeout(function () {
            element.style.display = "none"; // Masquer l'élément après le fondu
        }, 500); // Attente que la transition soit terminée
    }
}
