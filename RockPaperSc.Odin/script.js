

//Computer Choice!

function getrandom(min, max) {
    const rnd = Math.random();
    const choice = Math.floor(rnd * (max - min + 1)) + min;
    return choice;
}

function getComputerChoice() {
    const choice = getrandom(1, 3);

    if (choice === 1) {
        console.log("Rock")
        return "rock";
    } else if (choice === 2) {
        console.log("Paper")
        return "paper";
    } else {
        console.log("Scissors")
        return "scissors";
    }
}

//Human choice!

function getHumanChoice () {
let human = prompt("Rock, Paper or Scissors?");
if (human === null) {
    console.log("So... You don't want to play?");
    return;
}

human = human.toLowerCase();
if (human === "rock"){
    console.log("Rock")
    return human
}
else if (human === "paper"){
    console.log("Paper")
    return human
}
else if (human === "scissors"){
console.log("Scissors")
return human
}
else if (human === ""){
    console.log("what?")
    return human
}

else {console.log("Not an option!")};
}



//PLAYROUND 

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
if (humanChoice === computerChoice ){
    alert("Draw!")}
else if (humanChoice === "rock" && computerChoice === "paper"){
alert("Computer Wins!")
}
else if (humanChoice === "paper" && computerChoice === "scissors"){
    alert("Computer Wins!")
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins!")
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            alert("You Win!")
            }
            else if (humanChoice === "paper" && computerChoice === "rock"){
                alert("You Win!")
                }
                else if (humanChoice === "rock" && computerChoice === "scissors"){
                    alert("You Win!")
                    }

}


const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

playRound(humanChoice, computerChoice)








