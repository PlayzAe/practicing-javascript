// Initial scores for Home and Guest
let homeScore = 0;
let guestScore = 0;

// Get references to the score elements
let homeSc = document.getElementById("home-score");
let guestSc = document.getElementById("guest-score");

// Update Home score
document.getElementById("home1").onclick = function() {
    homeScore += 1; // Increment the home score by 1
    homeSc.textContent = homeScore; // Update the displayed score
};

document.getElementById("home2").onclick = function() {
    homeScore += 2; // Increment the home score by 2
    homeSc.textContent = homeScore;
};

document.getElementById("home3").onclick = function() {
    homeScore += 3; // Increment the home score by 3
    homeSc.textContent = homeScore;
};

// Update Guest score
document.getElementById("guest1").onclick = function() {
    guestScore += 1; // Increment the guest score by 1
    guestSc.textContent = guestScore;
};

document.getElementById("guest2").onclick = function() {
    guestScore += 2; // Increment the guest score by 2
    guestSc.textContent = guestScore;
};

document.getElementById("guest3").onclick = function() {
    guestScore += 3; // Increment the guest score by 3
    guestSc.textContent = guestScore;
};
