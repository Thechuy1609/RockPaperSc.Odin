

//Computer Choice!

function getrandom(min, max) {
    const rnd = Math.random();
    const choice = Math.floor(rnd * (max - min + 1)) + min;
    return choice;
}

function getComputerChoice() {
    const choice = getrandom(1, 3);

    if (choice === 1) {
        console.log("Rock");
    } else if (choice === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

//Human choice!

function getHumanChoice () {
let humanChoice = prompt("Rock, Paper or Scissors?");
if (humanChoice === null) {
    console.log("So... You don't want to play?");
    return;
}

humanChoice = humanChoice.toLowerCase();
if (humanChoice=== "rock"){
    console.log("Rock")
}
else if (humanChoice === "paper"){
    console.log("Paper")
}
else if (humanChoice === "scissors"){
console.log("Scissors")
}
else if (humanChoice === ""){
    console.log("what?")
}

else {console.log("Not an option!")};
}



//PLAYROUND 

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){

}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)








