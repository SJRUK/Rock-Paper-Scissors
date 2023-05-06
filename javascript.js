/*Rock, paper scissors game */


const compChoices = ["rock", "paper", "scissors"];

function getComputerChoice(Choice) {

let compSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
return compSelection;
}

/* Buttons to get Player's selection */
/* Rock */
const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
  playRound(computersGo, "rock");
});

/* Paper */
const paper = document.querySelector('#paper');

paper.addEventListener('click', () => {
  playRound(computersGo, "paper");
});

/* Scissors */
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound(computersGo, "scissors");
});


let computersGo;
//let playersGo;//

let computerScore = 0;
let playerScore = 0;

const container2 = document.querySelector('.container2');

const versus = document.createElement('p');
container2.appendChild(versus);

const result = document.querySelector('#result');
container2.appendChild(result);

const score = document.createElement('h3');
container2.appendChild(score);




function playRound(computersGo, playersGo){
  computersGo = getComputerChoice();

  
  result.textContent = "Result:";
  
  
    versus.textContent = "(Player) " + playersGo + " VS " + computersGo + " (Computer)";
    console.log(versus);


       if (computersGo === playersGo){
        pWin = false;
        cWin = false; 
        const draw = document.createElement('p');
        draw.classList.add('draw');
        draw.textContent = "It's a draw!";
        result.appendChild(draw);
        playerScore++;
        computerScore++;
        score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
       }
       else if (computersGo === "rock" && playersGo === "paper") {
        const pWin = document.createElement('p');
        pWin.classList.add('pWin');
        pWin.textContent = "Player wins!";
        result.appendChild(pWin);
        playerScore++;
        score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;

        }
        else if (computersGo === "paper" && playersGo === "rock") {
          const cWin = document.createElement('p');
          cWin.classList.add('pWin');
          cWin.textContent = "Computer wins!";
          result.appendChild(cWin);
          computerScore++;
          score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
        }
        else if (computersGo === "scissors" && playersGo === "rock") {
          const pWin = document.createElement('p');
          pWin.classList.add('pWin');
          pWin.textContent = "Player wins!";
          result.appendChild(pWin);
          playerScore++;
          score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
        }
        else if (computersGo === "rock" && playersGo === "scissors") {
          const cWin = document.createElement('p');
          cWin.classList.add('pWin');
          cWin.textContent = "Computer wins!";
          result.appendChild(cWin);
          computerScore++;
          score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
        }
        else if (computersGo === "paper" && playersGo === "scissors") {
          const pWin = document.createElement('p');
          pWin.classList.add('pWin');
          pWin.textContent = "Player wins!";
          result.appendChild(pWin);
          playerScore++;
          score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
          }
          else if (computersGo === "scissors" && playersGo === "paper") {
            const cWin = document.createElement('p');
            cWin.classList.add('pWin');
            cWin.textContent = "Computer wins!";
            result.appendChild(cWin);
            computerScore++;
            score.textContent = "Player's Score = " + playerScore + " Computer's Score = " + computerScore;
          }  
      if (playerScore >= 5 && computerScore < 5)
      {
        const pWinner = document.createElement('h2');
        pWinner.classList.add('pWinner');
        pWinner.textContent = "Player wins the game!";
        container2.appendChild(pWinner);  
      }    

      if (computerScore >= 5 && playerScore < 5)
      {
        const cWinner = document.createElement('h2');
        cWinner.classList.add('cWinner');
        cWinner.textContent = "Computer wins the game!";
        container2.appendChild(cWinner);  
      }    

      if (computerScore == 5 && playerScore == 5)
      {
        const aDraw = document.createElement('h2');
        aDraw.classList.add('aDraw');
        aDraw.textContent = "It's a draw - no-one wins!";
        container2.appendChild(aDraw);  
      }    



    }
        

