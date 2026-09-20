// Display welcome and destination summary
function showMessage() {
    alert("Welcome to Incredible India!\n\nTop destinations to explore:\n1. Taj Mahal - Agra\n2. Kerala Backwaters - God's Own Country\n3. Goa Beaches - Sun, Sand & Sea\n4. Jaipur - The Pink City\n\nClick on any destination card to learn more!");
}

// Display details for a specific destination
function showDestinationDetails(placeName) {
    const destinationInfo = {
        "Taj Mahal": "Located in Agra, Uttar Pradesh.\nBest time to visit: October to March.\nFamous for iconic Mughal architecture and heritage.",
        "Kerala Backwaters": "Located in Kerala.\nBest time to visit: September to March.\nFamous for serene houseboat cruises and scenic backwaters.",
        "Goa Beaches": "Located on the western coast.\nBest time to visit: November to February.\nFamous for golden beaches, water sports, and coastal cuisine.",
        "Jaipur City Palace": "Located in Jaipur, Rajasthan.\nBest time to visit: October to March.\nFamous for historic royal courtyards, museums, and Rajput architecture."
    };

    const details = destinationInfo[placeName] || "Explore the rich culture and heritage of this amazing destination!";
    alert(`Destination: ${placeName}\n\n${details}`);
}

// Add click listeners to all destination cards once the page loads
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.style.cursor = "pointer";
        card.title = "Click to view details";

        card.addEventListener("click", function () {
            const title = card.querySelector("h3");
            if (title) {
                showDestinationDetails(title.textContent.trim());
            }
        });
    });
});