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

function getPlayerChoice() {
    return prompt("Rock, paper or scissors?").trim().toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
         alert(`Tie! You picked ${playerChoice} and the computer picked ${computerChoice}.`);
         return 2;
    }
    let playerWon;
    switch (playerChoice) {
        case "rock":
            computerChoice === "scissors" ? playerWon = true : playerWon = false;
            if (playerWon) {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`);
                return 1;
            } else {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`);
                return 0;
            }
        case "paper":
            computerChoice === "rock" ? playerWon = true : playerWon = false;
            if (playerWon) {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`);
                return 1;
            } else {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`);
                return 0;
            }
        case "scissors":
            computerChoice === "paper" ? playerWon = true : playerWon = false;
            if (playerWon) {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`);
                return 1;
            } else {
                alert(`You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`);
                return 0;
            }
        
        default:
            alert(`You lose! You need to choose rock, paper or scissors!`);
            return 0;
    }
}

function playGame() {
    let playerWins = 0;
    let playerTies = 0;
    for (let i = 0; i < 5; i++ ) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerChoice, computerChoice);
        if (gameResult === 2) {
            playerTies += 1;
        } else {
            playerWins += gameResult;
        }
    }
    alert(`Game Results: Victories: ${playerWins}, Defeats: ${5 - (playerWins + playerTies)}, and Ties: ${playerTies}`);
}



