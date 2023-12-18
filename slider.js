// Sélection des éléments HTML avec les IDs correspondants
const carouselBoutonGauche = document.getElementById("carousel-bouton-gauche");
const carouselBoutonDroite = document.getElementById("carousel-bouton-droite");

// Initialisation des variables
let elementValue = 0; // La valeur de l'élément actuellement affiché (index)

const totalItems = 6; // Total number of items in the carousel

// Gestionnaire d'événement pour le bouton gauche du carrousel
carouselBoutonGauche.addEventListener('click', function () {
    elementValue = (elementValue - 1 + totalItems) % totalItems;
    updateCarousel();
});

// Gestionnaire d'événement pour le bouton droit du carrousel
carouselBoutonDroite.addEventListener('click', function () {
    elementValue = (elementValue + 1) % totalItems;
    updateCarousel();
});

// Function to update the carousel display
function updateCarousel() {
    for (let i = 0; i < totalItems; i++) {
        const item = document.getElementById("carousel-item-" + i);
        if (i === elementValue) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }

    if (elementValue === 0) {
        carouselBoutonGauche.style.display = "none";
    } else {
        carouselBoutonGauche.style.display = "block";
    }

    if (elementValue === totalItems - 1) {
        carouselBoutonDroite.style.display = "none";
    } else {
        carouselBoutonDroite.style.display = "block";
    }
}

// Initial setup of the carousel
updateCarousel();
