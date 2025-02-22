<script>
    // Sélection des éléments du menu et du bouton hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Écouteur d'événement pour le bouton hamburger
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Défilement fluide vers les sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>
