let aiChoice = ["rock", "paper", "scissor"];

// Random Computer Choices

function computerPlayer () {
   
   return aiChoice[Math.floor(Math.random() * aiChoice.length)];
}

// console.log(computerPlayer(aiChoice));

// Player and Computer Outcomes

function playRound(playerSelection, computerSelection) {
            // playerSelection = playerSelection.toLowerCase();
       if(playerSelection === "rock"){
           if(computerSelection === "rock"){
               return winner.textContent = "It's a tie!", player, computer;
           }else if(computerSelection === "paper"){
               return winner.textContent = "You Lose! Paper beats Rock", player, computer++;
           }else{
               return winner.textContent = "You Won! Rock beats Paper", player++, computer
           }
       }
      else if(playerSelection === "paper"){
          if(computerSelection === "paper"){
               return winner.textContent = "It's a tie!", player, computer;
          }else if(computerSelection ==="rock"){
              return winner.textContent = "You Won! Paper beats Rock", player++, computer;
          }else{
              return winner.textConttent = "You Lose! Scissors beats Paper", player, computer++;
          }
      }
      else {
           if(playerSelection === "scissor"){
               if(computerSelection === "scissor"){
                   return winner.textContent = "Its a tie!", player, computer;
               }else if(computerSelection === "rock"){
                   return winner.textContent = "You Lose!, Rock beats Scissor", player, computer++;
               }else{
                   return winner.textContent = "You Won! Scissors beats Paper", player++, computer;
               }
           }
      }
}
// Disabling Butotns after being used

// function disableButton () {
//     btn.forEach(elm => {
//         elm.disabled = true;
//     })
// }

function reStart() {
    player = 0;
    computer = 0;
    btn.forEach(elm => {
        elm.disabled = false;
    })
}

// Checking Player and Computer Scores
function totalScore (){
   score.textContent = `Player score is ${player} - Computer score is ${computer}`;
   if(player >= 5){
       alert("CONGRATULATION YOU HAVE WON!");
       winner.textContent = "YOU WON!";
       reStart();
   }else if(computer >= 5){
       alert("You LOSE!")
       winner.textContent ="You LOSE! PLEASE TRY AGAIN";
       reStart();
   }
}

//event listener for buttons
const rock = document.querySelector("#rockButton");
rock.addEventListener("click", () => playRound("rock", computerPlayer(), player, computer));


const paper = document.querySelector("#paperButton");
paper.addEventListener("click", () => playRound("paper", computerPlayer(), player, computer));

const scissor = document.querySelector("#scissorButton");
scissor.addEventListener("click", () => playRound("scissor", computerPlayer(), player, computer));

const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
winner.textContent = "PICK YOUR WEAPON";


let player = 0;
let computer = 0;
score.textContent = `Player score is ${player} - Computer score is ${computer}`;


const btn = document.querySelectorAll("button")
btn.forEach((button) =>{
    button.addEventListener("click", totalScore);
})

const restart = document.querySelector("#restart");
restart.addEventListener("click", () => reStart())
