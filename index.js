let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let newGameBtn = document.getElementById("new-game-btn");

let homeScoreAddOnePointBtn = document.getElementById("home-addScore-1");
let homeScoreAddTwoPointsBtn = document.getElementById("home-addScore-2");
let homeScoreAddThreePointsBtn = document.getElementById("home-addScore-3");

let homeScoreMinusOnePointBtn = document.getElementById("home-removeScore-1");
let homeScoreMinusTwoPointsBtn = document.getElementById("home-removeScore-2");
let homeScoreMinusThreePointsBtn = document.getElementById("home-removeScore-3");

let homeResetPointsBtn = document.getElementById("home-score-reset");
let guestResetPointsBtn = document.getElementById("guest-score-reset");

let guestScoreAddOnePointBtn = document.getElementById("guest-addScore-1");
let guestScoreAddTwoPointsBtn = document.getElementById("guest-addScore-2");
let guestScoreAddThreePointsBtn = document.getElementById("guest-addScore-3");

let guestScoreMinusOnePointBtn = document.getElementById("guest-removeScore-1");
let guestScoreMinusTwoPointsBtn = document.getElementById("guest-removeScore-2");
let guestScoreMinusThreePointsBtn = document.getElementById("guest-removeScore-3");


//              HOME - Scoreboard
//Home +1

homeScoreAddOnePointBtn.addEventListener("click", function() {
    homeScoreEl.textContent++;
    updateLeader();
});

//Home +2

homeScoreAddTwoPointsBtn.addEventListener("click", function() {
   homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
   updateLeader();
});

//Home +3

homeScoreAddThreePointsBtn.addEventListener("click", function() {
   homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
   updateLeader();
});


//In all "-" operations we first make a check so we don't get negative numbers
//Home -1

homeScoreMinusOnePointBtn.addEventListener("click", function() {
    if (Number(homeScoreEl.textContent) > 0) {
        homeScoreEl.textContent--;
        updateLeader();
    }
});

//Home -2

homeScoreMinusTwoPointsBtn.addEventListener("click", function() {
   if (Number(homeScoreEl.textContent) > 1) {
        homeScoreEl.textContent =  Number(homeScoreEl.textContent) - 2;
        updateLeader();
   }
});

//Home -3

homeScoreMinusThreePointsBtn.addEventListener("click", function() {
   if (Number(homeScoreEl.textContent) > 2) {
        homeScoreEl.textContent =  Number(homeScoreEl.textContent) - 3;
        updateLeader();
   }
});

//Home Reset

homeResetPointsBtn.addEventListener("click", function() {
    homeScoreEl.textContent = 0;
    updateLeader();
});

//      GUEST - Scoreboard

//Guest +1

guestScoreAddOnePointBtn.addEventListener("click", function() {
    guestScoreEl.textContent++;
    updateLeader();
});

//Guest +2

guestScoreAddTwoPointsBtn.addEventListener("click", function() {
   guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
   updateLeader();
});

//Guest +3

guestScoreAddThreePointsBtn.addEventListener("click", function() {
   guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
   updateLeader();
});

//In all "-" operations we first make a check so we don't get negative numbers
//Guest -1

guestScoreMinusOnePointBtn.addEventListener("click", function() { 
    if (Number(guestScoreEl.textContent) > 0) {
        guestScoreEl.textContent--;
        updateLeader();
    }
});

//Guest -2

guestScoreMinusTwoPointsBtn.addEventListener("click", function() {
   if (Number(guestScoreEl.textContent) > 1) {
        guestScoreEl.textContent =  Number(guestScoreEl.textContent) - 2;
        updateLeader();
   }
});

//Guest -3

guestScoreMinusThreePointsBtn.addEventListener("click", function() {
   if (Number(guestScoreEl.textContent) > 2) {
        guestScoreEl.textContent =  Number(guestScoreEl.textContent) - 3;
        updateLeader();
   }
   
});

//Guest Reset

guestResetPointsBtn.addEventListener("click", function() {
    guestScoreEl.textContent = 0;
    updateLeader();
});


function updateLeader() {
    let home = Number(homeScoreEl.textContent);
    let guest = Number(guestScoreEl.textContent);

    // remove previous highlight first
    document.querySelector(".home").classList.remove("leader");
    document.querySelector(".guest").classList.remove("leader");

    if (home > guest) {
        document.querySelector(".home").classList.add("leader");
    } else if (guest > home) {
        document.querySelector(".guest").classList.add("leader");
    }
    // If equal: no highlight on either side
}

newGameBtn.addEventListener("click", function() {
    let confirmReset = confirm("Are you sure you want to start a new game?");
    if (confirmReset) {
        // Reset scores
        homeScoreEl.textContent = 0;
        guestScoreEl.textContent = 0;
        updateLeader();
    }
});

