

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
    alert("Draw!") ; computerScore += 1; humanScore += 1}
else if (humanChoice === "rock" && computerChoice === "paper"){
alert("Computer Wins!"); computerScore += 1
}
else if (humanChoice === "paper" && computerChoice === "scissors"){
    alert("Computer Wins!"); computerScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins!") ; computerScore += 1
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            alert("You Win!"); humanScore += 1
            }
            else if (humanChoice === "paper" && computerChoice === "rock"){
                alert("You Win!") ; humanScore += 1
                }
                else if (humanChoice === "rock" && computerChoice === "scissors"){
                    alert("You Win!");  humanScore += 1
                    };
                    console.log("The score is " + humanScore + " human"+ " - " + computerScore + " computer")

}

//PLAYGAME - 5 ROUNDS

function playGame() {

    const humanChoice1 = getHumanChoice()
    const computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);


    const humanChoice2 = getHumanChoice()
    const computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);


    const humanChoice3 = getHumanChoice()
    const computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);


    const humanChoice4 = getHumanChoice()
    const computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);


    const humanChoice5 = getHumanChoice()
    const computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);

    alert("The final score is " + humanScore + " human" + " - " + 
        computerScore + " computer")
    
    
}








playGame()








