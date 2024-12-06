const cSelection = document.getElementById("computer"),
rpsButton = document.querySelectorAll(".playerBtn"),
resultMsg = document.querySelector("#results"),
resultDescription = document.querySelector("#results-description"),
playerScoreboard = document.querySelector("#player-score"),
computerScoreboard = document.querySelector("#computer-score");


rpsButton.forEach((btn) => btn.addEventListener('click', playGame));
let playerScore = 0,
computerScore = 0;

function playGame() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    let results = playRound(playerChoice, computerChoice);
    updateScore(playerChoice, computerChoice, results);
}

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    pick = Math.floor(Math.random() * options.length)
    return options[pick];
}

function playRound(humanChoice, computerChoice) {
    let result; // Tie:0, playerWin:1, playerLose:2
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return result = 0;
                } else if (computerChoice === "scissors") {
                    return result = 1;
            } else if (computerChoice === "paper") {
                return result = 2;
            }
        case "paper":
            if (computerChoice === "paper") {
                return result = 0;
            } else if (computerChoice === "rock") {
                return result = 1;
            } else if (computerChoice === "scissors") {
                return result = 2;
            }
        case "scissors":
            if (computerChoice === "scissors") {
                return result = 0;
            } else if (computerChoice === "paper") {
                return result = 1;
            } else if (computerChoice === "rock") {
                return result = 2;
            }
    }

}

function updateScore(pChoice, cChoice, outcome) {
/*  update computer img
    update player & computer score
    display outcome of round
    display outcome winner
    check for game winner (5 wins)
        if true, display game over & play again button
            if play again, clean reset
*/
    if (outcome == 0) {
        resultMsg.textContent = 'It\'s a Tie.';
    }else if (outcome == 1) {
        resultMsg.textContent = 'You Win.';
        playerScoreboard.textContent = `${playerScore + 1}`;
        playerScore++;
    } else if (outcome == 2) {
        resultMsg.textContent = 'You Lose.';
        computerScoreboard.textContent = `${computerScore + 1}`;
        computerScore++;
    }
    resultDescription.textContent = `You chose ${pChoice} and Computer chose ${cChoice}.`;
    switch(cChoice) {
        case 'rock':
            cSelection.src = "./images/rock.png";
            break;
        case 'paper':
            cSelection.src = "./images/paper.png";
            break;
        case 'scissors':
            cSelection.src = "./images/scissors.png";
            break;
    }
}