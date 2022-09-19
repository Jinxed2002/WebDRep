const nameOverlay = document.getElementById("player-config");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const noInputError = document.getElementById("noInputError");
const gameBoard = document.getElementById("game-board");
const gameSquares = document.querySelectorAll("#game-grid li");
const over = document.getElementById("over");

const nameP1 = document.getElementById("nameP1");
const nameP2 = document.getElementById("nameP2");

let targetPlayer = 0;
let currentPlayer = 0;
let round = 1;
let finished = false;
const gameState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];

const cancelName = document.getElementById("cancelName");

const startBtn = document.getElementById("startBtn");

nameP1.addEventListener("click", openConfigOverlay);
nameP2.addEventListener("click", openConfigOverlay);

cancelName.addEventListener("click", closeConfigOverlay);
backdrop.addEventListener("click", closeConfigOverlay);

form.addEventListener("submit", saveConfig);

startBtn.addEventListener("click", showBoard);

for(const square of gameSquares){
    square.addEventListener("click", selectSquare)
}