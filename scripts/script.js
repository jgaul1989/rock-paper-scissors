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
        return `Tie! You picked ${playerChoice} and the computer picked ${computerChoice}.`;
    }
    let playerWon;
    switch (playerChoice) {
        case "rock":
            computerChoice === "scissors" ? playerWon = true : playerWon = false;
            if (playerWon) {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`;
            } else {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`;
            }
        case "paper":
            computerChoice === "rock" ? playerWon = true : playerWon = false;
            if (playerWon) {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`;
            } else {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`;
            }
        case "scissors":
            computerChoice === "paper" ? playerWon = true : playerWon = false;
            if (playerWon) {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You won!`;
            } else {
                return `You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`;
            }
        
        default:
            return 'You need to pick rock, paper or scissors!';
    }
}

function playGame() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
}



