// function getting computer's choice  
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
    computerPick = "rock";
    } else if (computerChoice === 2) {
    computerPick = "paper";
    } else if (computerChoice === 3) {
    computerPick = "scissors";
    } else {
    console.log("Error")
    }   

    return computerPick;
}

// getHumanChoice 
function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?");
    humanPick = humanChoice.toLowerCase();
    return humanPick;
}

// score variables 
let humanScore = 0;
let computerScore = 0;

// round function 
function playRound(humanPick, computerPick) {
    if (humanPick === "rock") {
        if (computerPick === "rock") {
            alert("It's a tie!");
        } else if (computerPick === "paper") {
            alert("You lose!");
            computerScore++;
        } else if (computerPick === "scissors") {
            alert("You win!");
            humanScore++;
        } else {
            console.log("Error");
        }
    } else if (humanPick === "paper") {
        if (computerPick === "paper") {
            alert("It's a tie!");
        } else if (computerPick === "scissors") {
            alert("You lose!");
            computerScore++;
        } else if (computerPick === "rock") {
            alert("You win!");
            humanScore++;
        } else {
            console.log("Error");
        }
    } else if (humanPick === "scissors") {
        if (computerPick === "scissors") {
            alert("It's a tie!");
        } else if (computerPick === "rock") {
            alert("You lose!");
            computerScore++;
        } else if (computerPick === "paper") {
            alert("You win!");
            humanScore++;
        } else {
            console.log("Error");
        }
    } else {
        console.log("Error");
    }
}

// play game 
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }
    if (humanScore === 5) {
    alert("Congratulations! You won! The score was 5 to " + computerScore + ".");
    } else if (computerScore === 5) {
    alert("Sorry, you lose this game. The score was 5 to " + humanScore + ".")
    alert("Refresh to try again?");
    } else {
    console.log("Error");
    }
}

playGame();
