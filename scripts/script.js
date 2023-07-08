const gameChoices = document.querySelectorAll(".game-choices");

gameChoices.forEach((choice) => {
    choice.addEventListener("click", playerSelection);
});

function playerSelection(e) {
    let playerChoice = e.target.getAttribute('id');
        result = playRound(playerChoice, getComputerChoice);
        incrementRoundCounter();
        updateGameScore(result);
        checkGameOver();
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        displayRoundResults(`Tie! You picked ${playerChoice} and the computer picked ${computerChoice}.`); 
        return "tie";
    }
    let playerWon;
    switch (playerChoice) {
        case "rock":
            computerChoice === "scissors" ? playerWon = true : playerWon = false;
            break;
        case "paper":
            computerChoice === "rock" ? playerWon = true : playerWon = false;
            break;
        case "scissors":
            computerChoice === "paper" ? playerWon = true : playerWon = false;
            break;
    }
    if(playerWon) {
        displayRoundResults(`You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`);
        return "win";
    } else {
        displayRoundResults(`You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`);
        return "loss";
    }
}

function displayRoundResults(roundResults) {
    const resultsContainer = document.querySelector(".round-results");
    if (resultsContainer.childElementCount > 1) {
        resultsContainer.removeChild(resultsContainer.lastChild);
    }
    const results = document.createElement("p");
    results.textContent = roundResults;
    resultsContainer.appendChild(results);
}

function incrementRoundCounter() {
    const curRound = document.querySelector("#cur-round");
    let nextRound = parseInt((curRound.textContent)) + 1;
    curRound.textContent = nextRound;
}

function updateGameScore(roundResult) {
    let curScore;
    switch(roundResult) {
        case "win":
            curScore = document.querySelector("#num-wins");
            break;
        case "loss":
            curScore = document.querySelector("#num-losses");
            break;
        case "tie":
            curScore = document.querySelector("#num-ties");
    }
    let newScore = parseInt(curScore.textContent) + 1;
    curScore.textContent = newScore;
}

function checkGameOver() {
    const numWins = parseInt(document.querySelector("#num-wins").textContent);
    const numLosses = parseInt(document.querySelector("#num-losses").textContent);
    if (numWins >= 5) {
        endGame("Congratulations! You won the game!");
    } else if (numLosses >= 5) {
        endGame("You lost the game!");
    }
}

function endGame(gameResults) {
    gameChoices.forEach((choice) => {
        choice.removeEventListener("click",playerSelection);
    })
    const resultsContainer = document.querySelector(".round-results");
    const results = document.createElement("p");
    results.textContent = gameResults;
    resultsContainer.appendChild(results);
}




