function resetGame(){
    finished = false;
    currentPlayer = 0;
    round = 1;
    over.firstElementChild.innerHTML = "You Won, <span id=\"winner\">player</span>!";
    over.style.display = "none";
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameState[i][j] = 0;
            document.getElementById("game-grid").children[3*i+j].textContent = "";
            document.getElementById("game-grid").children[3*i+j].classList.remove("disabled");
        }
    }
}

function showBoard(){
    if(!players[0].name || !players[1].name){
        alert("Player names not set!");
        return;
    }
    resetGame();
    gameBoard.style.display = "block";
    document.getElementById("current-player").textContent = players[currentPlayer].name;
}

function switchPlayer(){
    if(currentPlayer === 0){
        currentPlayer = 1;
    }
    else{
        currentPlayer = 0;
    }
}

function winCondition(){
    for(let i=0; i<3; i++){
        if(gameState[i][0]!=0 && gameState[i][0]===gameState[i][1] && gameState[i][0]===gameState[i][2]){
            return gameState[i][0];
        }
    }
    for(let i=0; i<3; i++){
        if(gameState[0][i]!=0 && gameState[0][i]===gameState[1][i] && gameState[0][i]===gameState[2][i]){
            return gameState[0][i];
        }
    }
    if(gameState[0][0]!=0 && gameState[0][0]===gameState[1][1] && gameState[0][0]===gameState[2][2]){
        return gameState[0][0];
    }
    if(gameState[0][2]!=0 && gameState[0][2]===gameState[1][1] && gameState[0][2]===gameState[2][0]){
        return gameState[0][2];
    }
    if(round===9){
        return -1;
    }
}

function endGame(winner){
    finished = true;
    over.style.display = "block";
    if(winner!=-1){
        document.getElementById("winner").textContent = players[winner-1].name;
    }
    else{
        over.firstElementChild.textContent = "It\'s a draw...";
    }
}

function selectSquare(event){
    if(finished){
        return;
    }
    const squareRow = +event.target.dataset.row;
    const squareColumn = +event.target.dataset.col;
    if(gameState[squareRow][squareColumn]){
        alert("Square already selected!");
        return;
    }
    event.target.textContent = players[currentPlayer].symbol;
    event.target.classList.add("disabled");
    gameState[squareRow][squareColumn] = currentPlayer + 1;
    let winner = winCondition();
    if(winner===-1 || winner===1 || winner===2){
        endGame(winner);
    }
    round++;
    switchPlayer();
    document.getElementById("current-player").textContent = players[currentPlayer].name;
}