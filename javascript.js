/*getComputerChoice - randomly return rock paper or scissors
compare player selection and computerselection in a single round of the game
Return a string that declares the winner else.g. "you win, rock beats scissors!"

Function called game will play a 5 round game and keep score */



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


function playRound(computersGo, playersGo){
    let VS = computersGo + " VS " + playersGo;
    console.log(VS);
       if (computersGo === playersGo){
        return "It's a draw!";
       }
       else if (computersGo === "rock" && playersGo === "paper") {
        return "Player wins - paper beats rock!";
       }
        else if (computersGo === "paper" && playersGo === "rock") {
          return "Computer wins - paper beats rock!";
        }
        else if (computersGo === "scissors" && playersGo === "rock") {
            return "Player wins - rock beats scissors!";
          }
          else if (computersGo === "rock" && playersGo === "scissors") {
            return "Computer wins - rock beats scissors!"; 
        }
        else if (computersGo === "paper" && playersGo === "scissors") {
            return "Player wins - scissors beats paper!";
          }
          else if (computersGo === "scissors" && playersGo === "paper") {
            return "Computer wins - scissors beats paper!";
          }  
          else {
            return "You did not choose rock, paper or scissors! Please try again.";
          }

    }
        
    


const computersGo = getComputerChoice();
const playersGo = getPlayerChoice();

console.log("Computer chooses: " + computersGo);
console.log("You choose: " + playersGo);

console.log(playRound(computersGo, playersGo));



/*if (playerSelection == "rock" || "paper" || "scissors"){

console.log("You choose: " + playerSelection);
return playerSelection;
}
else {
    console.log("That was not rock, paper or scissors!");
}*/