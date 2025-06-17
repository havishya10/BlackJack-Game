import startConfetti from "./confetti.js";

let card;
let cards = [];
const suit = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 1
};
let sum = 0;
let hasBlackJack = false;
let msgEl = document.getElementById("msg-el");
let startBtnEl = document.getElementById("start-btn");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let drawBtnEl = document.getElementById("draw-card-btn");
let surrenderBtnEl = document.getElementById("surrender-btn");
startBtnEl.addEventListener("click", start);

function start() {
    console.log("Start Game")
    drawBtnEl.style.display = "block";
    surrenderBtnEl.style.display = "block";
    startBtnEl.style.display = "none";
    cardsEl.textContent = `Cards: ${cards}`;
    sum !== 0 ? sumEl.innerHTML = `Sum: <span id="sum">${sum}</span>` : sumEl.textContent = `Sum: `;
    if (sum < 21 ) {
        msgEl.textContent = "Do you want to Draw a card?";
    } else if (sum === 21) {
        startConfetti();

        msgEl.textContent = ("BlackJack!");
        msgEl.style.color = "green";
        document.getElementById("sum").style.color = "green";
        hasBlackJack = true;
        reset()
    } else {
        const gameEndSound = new Audio("gend.mp3");
        gameEndSound.volume = 0.8;
        gameEndSound.play();
        msgEl.textContent = ("Bust!");
        gameEnd();

    }

}
function drawCard() {
    console.log("Drawing Card")
    const cardSound = new Audio("card1.mp3");
    cardSound.volume = 0.5;
    cardSound.playbackRate = 1.8;
    cardSound.play();
    card = Object.keys(suit)[Math.floor(Math.random() * Object.keys(suit).length)]
    const cardRank = suit[card];
    cards.push(card);
    console.log(card);
    sum = sum + cardRank;
    console.log(cardRank);
    start()
}
function reset() {
    drawBtnEl.style.display = "none";
    surrenderBtnEl.style.display = "none";
    startBtnEl.style.display = "block";
    startBtnEl.textContent = `Play Again`;
    startBtnEl.addEventListener("click", () =>  location.reload());
}
function gameEnd() {


    msgEl.style.color = "red";
    try {
        document.getElementById("sum").style.color = "red";
    } catch (error) {
        console.log(error);
    }
    reset()
}
drawBtnEl.addEventListener("click", drawCard);
surrenderBtnEl.addEventListener("click", () => {
    const surrenderSound = new Audio("surrender.mp3");
    surrenderSound.volume = 0.5;
    surrenderSound.playbackRate = 1.8;
    surrenderSound.play();
    msgEl.textContent = ("surrendered!");
    gameEnd();

    }
)