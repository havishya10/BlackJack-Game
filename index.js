import startConfetti from "./confetti.js";
let  firstCard = 3;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let msgEl = document.getElementById("msg-el");
let startBtnEl = document.getElementById("start-btn");


startBtnEl.addEventListener("click", start);
function start() {
    console.log("Start Game")
    if (sum < 21 ) {
        msgEl.textContent = "Do you want to Draw a card?";
    } else if (sum === 21) {
        msgEl.textContent = ("BlackJack!");
        msgEl.style.color = "green";
        hasBlackJack = true;
    } else {
        msgEl.textContent = ("Bust!");
        msgEl.style.color = "red";
    }
    startConfetti();
}