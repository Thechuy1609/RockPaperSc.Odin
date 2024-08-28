
//Score Assign
function addItem1 (){
const score = document.getElementById("scores")
score.textContent = "Current Human Score = " + humanScore;

}



function addItem2 (){
const scorer = document.getElementById("scores2")
    scorer.textContent = "Current Computer Score = " + computerScore;
    }
window.onload = function() {
        addItem1();
        addItem2();
    };
  
    



let playerChoice;
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


// Game
function getplayerChoice(){
document.addEventListener('DOMContentLoaded', () => {
    let playerSelection = document.querySelectorAll("button");
    let playerChoice = "";
    playerSelection.forEach((button) => {
        button.addEventListener('click', (event) => {
            let target = event.target;

            switch(target.id) {
                case 'btn1':
                    playerChoice = "rock";
                    console.log('Rock');
                    break;
                case 'btn2':
                    playerChoice = "paper";
                    console.log('Paper');
                    break;
                case 'btn3':
                    playerChoice = "scissors";
                    console.log('Scissors');
                    break;
                 
            }
            
            let computerChoice = getComputerChoice();
                playRound(playerChoice,computerChoice);
        });
    });
});
}



//PLAYROUND 

let humanScore = 0;
let computerScore = 0;
function playRound(playerChoice, computerChoice) {
    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    if (playerChoice === computerChoice) {
        alert("Draw!");
       humanScore += 1;
       computerScore += 1;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        alert("Computer Wins!");
        computerScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        alert("Computer Wins!");
        computerScore += 1;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        alert("Computer Wins!");
        computerScore += 1;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You Win!");
        humanScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You Win!");
        humanScore += 1;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        alert("You Win!");
        humanScore += 1;
    };
    
    if (humanScore >= 5 || computerScore >= 5) {
        disableButtons();
    }
    addItem1()
    addItem2()
    restart()
}


function restart(){
    let announce = document.querySelector('#announcer');
    if (humanScore >= 5 && computerScore < 5) {
        announce.textContent = "Human Wins!";
    } else if (computerScore >= 5 && humanScore < 5) {
        announce.textContent = "Computer Wins!";
    } else if (humanScore >= 5 && computerScore >= 5) {
        announce.textContent = "It's a Draw!";
    }
}


function disableButtons() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}



//PLAYGAME - 5 ROUNDS
function playGame() {

getplayerChoice();

}

playGame()












