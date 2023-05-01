/*Rock, paper scissors game */


const compChoices = ["rock", "paper", "scissors"];

function getComputerChoice(Choice) {

let compSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
return compSelection;
}


function getPlayerChoice(Choice){
    
let playerChoice = prompt("Please make your choice: rock, paper or scissors");

let playerSelection = playerChoice.toLowerCase();
return playerSelection;
}


let computersGo;
let playersGo;

function playRound(computersGo, playersGo){
  computersGo = getComputerChoice();
  playersGo = getPlayerChoice();
    let VS = "Player: " + playersGo + " VS " + computersGo + " :Computer";
    console.log(VS);
       if (computersGo === playersGo){
        pWin = false;
        cWin = false;
        return "It's a draw!";
       }
       else if (computersGo === "rock" && playersGo === "paper") {
            pWin = true;
            cWin =false;
            return "Player wins - rock beats paper!";
       }
        else if (computersGo === "paper" && playersGo === "rock") {
            cWin = true;
            pWin = false;
            return "Computer wins - paper beats rock!";
        }
        else if (computersGo === "scissors" && playersGo === "rock") {
            pWin = true;
            cWin =false;
            return "Player wins - rock beats scissors!";
        }
          else if (computersGo === "rock" && playersGo === "scissors") {
            cWin = true;
            pWin = false;
            return "Computer wins - rock beats scissors!"; 
        }
        else if (computersGo === "paper" && playersGo === "scissors") {
            pWin = true;
            cWin =false;
            return "Player wins - scissors beats paper!";
          }
          else if (computersGo === "scissors" && playersGo === "paper") {
            cWin = true;
            pWin = false;
            return "Computer wins - scissors beats paper!";
          }  
          else {
            pWin = false;
            cWin = false;
            return "You did not choose rock, paper or scissors! Please try again.";
          }
    }
        
let playerScore = 0;
let computerScore = 0;

let pWin = new Boolean(false);
let cWin = new Boolean(false);

function game() {
    let gamesPlayed = 0;
    
    while (gamesPlayed < 5){
        (playRound(computersGo, playersGo));

    if (pWin){
    playerScore++;
    console.log("PLAYER WINS THIS ROUND! Player " + playerScore + " Vs " + computerScore + " Computer");
    }
    else if (cWin) {
    computerScore++;
    console.log("COMPUTER WINS THIS ROUND! Player " + playerScore + " Vs " + computerScore + " Computer");
    }
    else {
      console.log("This round is a draw!" + " Player " + playerScore + " Vs " + computerScore + " Computer")
    }
    
  gamesPlayed++;

  if (gamesPlayed >= 5) {
    console.log("Game Over!" + " Player " + playerScore + " Vs " + computerScore + " Computer");
   }
}}

console.log(game());







/*
if (playerSelection == "rock" || "paper" || "scissors"){

console.log("You choose: " + playerSelection);
return playerSelection;
}
else {
    console.log("That was not rock, paper or scissors!");} 
*/