/*getComputerChoice - randomly return rock paper or scissors
compare player selection and computerselection in a single round of the game
Return a string that declares the winner else.g. "you win, rock beats scissors!"

Function called game will play a 5 round game and keep score */



const compChoices = ["rock", "paper", "scissors"];

function getComputerChoice(Choice) {

let compSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
console.log("Computer chooses: " + compSelection);
return compSelection;
}

getComputerChoice(compChoices);


function getPlayerChoice(Choice){
    
let playerChoice = prompt("Choose rock, paper or scissors");

let playerSelection = playerChoice.toLowerCase();
console.log("You choose: " + playerSelection);
return playerSelection;
}

getPlayerChoice();



/*if (playerSelection == "rock" || "paper" || "scissors"){

console.log("You choose: " + playerSelection);
return playerSelection;
}
else {
    console.log("That was not rock, paper or scissors!");
}*/