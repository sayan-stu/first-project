
console.log("Welcome to my AWS Portfolio!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").textContent =
            "Thank you, " + name + "! Your demo message was received.";

        contactForm.reset();
    });
}



// Search Lost and Found Items
const searchInput = document.getElementById("itemSearch");
const itemCards = document.querySelectorAll(".item-card");

if (searchInput) {
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        itemCards.forEach(function(card) {
            const itemDetails = card.textContent.toLowerCase();

            card.style.display =
                itemDetails.includes(searchText) ? "block" : "none";
        });
    });
}
