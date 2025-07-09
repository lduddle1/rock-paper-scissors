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

// log check 
getComputerChoice() 
console.log(computerPick)

// getHumanChoice 

function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?");
    humanPick = humanChoice.toLowerCase();
    return humanPick;
}

//log check 
getHumanChoice();
console.log(humanPick);

// score variables 
let humanScore = 0;
let computerScore = 0;

// round function 
function playRound(humanPick, computerPick) {
  getComputerChoice();
  getHumanChoice();
  if (getComputerChoice = "rock" && getHumanChoice = "rock" || getComputerChoice = "paper" && getHumanChoice = "paper" || getComputerChoice = "scissors" && getHumanChoice = "scissors") {
    alert("It's a tie!")
  } else if ()
  // your code here!
}

"rock" < "paper"
"paper" < "scissors"
"scissors" < "rock"


// get choices 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// play round 
playRound(humanSelection, computerSelection);




