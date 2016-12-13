var playerChoice;
var playerScore = 0;
var botScore = 0;

var rockButton = document.getElementById('rock_button');
var paperButton = document.getElementById('paper_button');
var scissorsButton = document.getElementById('scissors_button');

var results;

var myArray = ['rock', 'paper', 'scissors']; 
var generateComputerChoice = function() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}


if (playerChoice === 'rock' && generateComputerChoice() === 'scissors') {
  console.log ('You win!');
  playerScore++;
} else if (playerChoice === 'scissors' && generateComputerChoice() === 'paper') {
  console.log ('You win!');
  playerScore++;
} else if (playerChoice === 'paper' && generateComputerChoice() === 'rock') {
  console.log ('You win!');
  playerScore++;
} else if (playerChoice === 'scissors' && generateComputerChoice() === 'rock') {
  console.log ('You lose!');
  botScore++;
} else if (playerChoice === 'paper' && generateComputerChoice() === 'scissors') {
  console.log ('You lose!');
  botScore++;
} else if (playerChoice === 'rock' && generateComputerChoice() === 'paper') {
  console.log ('You lose!');
  botScore++;
} else if (playerChoice === 'rock' && generateComputerChoice() === 'rock') {
  console.log ("It's a draw, try again...")
} else if (playerChoice === 'paper' && generateComputerChoice() === 'paper') {
  console.log ("It's a draw, try again...")
} else if (playerChoice === 'scissors' && generateComputerChoice() === 'scissors') {
  console.log ("It's a draw, try again...")
}

document.getElementById ('playerScore').innerHTML = playerScore;
document.getElementById ('botScore').innerHMTL = botScore;

rockButton.addEventListener('click', function() {
  playerChoice = 'rock';
  generateComputerChoice();
})

paperButton.addEventListener('click', function() {
  playerChoice = 'paper';
  generateComputerChoice();
})

scissorsButton.addEventListener('click', function() {
  playerChoice = 'scissors';
  generateComputerChoice();
})