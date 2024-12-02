function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    pick = Math.floor(Math.random() * options.length)
    return options[pick];
}

function getHumanChoice () {
    let pick = prompt("Input: Rock, Paper, Scissors").toLowerCase();
    if (pick != "rock" && pick != "paper" && pick != "scissors") {
        return getHumanChoice();
    } else return pick;
}

function playRound(humanChoice, computerChoice) {
    console.log (`You: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}  |  
                CPU: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Tie");
                } else if (computerChoice === "scissors") {
                console.log("You Win");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("You Lose");
                computerScore ++;
            } break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("Tie");
            } else if (computerChoice === "rock") {
                console.log("You Win");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("You Lose");
                computerScore ++;
            } break;
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("Tie");
            } else if (computerChoice === "paper") {
                console.log("You Win");
                humanScore++;
            } else if (computerChoice === "rock") {
                console.log("You Lose");
                computerScore ++;
            } break;
    }

}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

let computerScore = 0;
let humanScore = 0;
playGame();

console.log("     Final Score:");
console.log(`You: ${humanScore}  |  CPU: ${computerScore}`);