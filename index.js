// Initial scores for Home and Guest
let homeScore = 0;
let awayScore = 0;

// Get references to the score elements
let homeSc = document.getElementById("home-score");
let awaySc = document.getElementById("away-score");

// update adding the elements for home buttons
document.getElementById("home1").onclick = function(){
    homeScore += 1;
    homeSc.textContent = homeScore;
}

document.getElementById("home2").onclick = function(){
    homeScore += 2;
    homeSc.textContent = homeScore;
}

document.getElementById("home3").onclick = function(){
    homeScore += 3;
    homeSc.textContent = homeScore;
}

// update adding the elements for away buttons

document.getElementById("away1").onclick = function(){
    awayScore += 1;
    awaySc.textContent = awayScore;
}

document.getElementById("away2").onclick = function(){
    awayScore += 2;
    awaySc.textContent = awayScore;
}

document.getElementById("away3").onclick = function(){
    awayScore += 3;
    awaySc.textContent = awayScore;
}