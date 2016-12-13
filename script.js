function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var playerChoice;

var rockButton = document.getElementById('rock_button');
var paperButton = document.getElementById('paper_button');
var scissorsButton = document.getElementById('scissors_button');

var myArray = ['Rock', 'Paper', 'Scissors']; 

var generateComputerChoice = function() {
  myArray[Math.floor(Math.random() * myArray.length)];
}

rockButton.addEventListener('click', function() {
  playerChoice = 'rock';
  console.log ('rock');
  console.log (generateComputerChoice());
})

paperButton.addEventListener('click', function() {
  playerChoice = 'paper';
  generateComputerChoice();
})

scissorsButton.addEventListener('click', function() {
  playerChoice = 'paper';
  generateComputerChoice();
})

if (playerChoice = 'rock' && generateComputerChoice()= 'scissors') {
  'You win!'
} if else (playerChoice = 'scissors' && generateComputerChoice()= 'paper') {
  'You win!'
} if else (playerChoice = 'paper' && generateComputerChoice()= 'rock') {
  'You win!'
} if else (playerChoice = 'scissors' && generateComputerChoice()= 'rock') {
  'You lose!'
} if else (playerChoice = 'paper' && generateComputerChoice()= 'scissors') {
  'You lose!'
} if else (playerChoice = 'rock' && generateComputerChoice()= 'paper') {
  'You lose!'
} else {
  "It's a draw, try again..."
}
