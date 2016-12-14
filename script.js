var playerScore = 0;
var botScore = 0;

var rockButton = document.getElementById('rock_button');
var paperButton = document.getElementById('paper_button');
var scissorsButton = document.getElementById('scissors_button');


var result = document.getElementById('results');
var playerChoice = document.getElementById ('playerChoice');
var computerChoice = document.getElementById ('computerChoice');

var playerChoice;
var computerChoice;
var winner;

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var displayWinner = function () {
  playerChoice.innerHTML = '<h2>Player Choice: ' + playerChoice + '</h2>';
  computerChoice.innerHTML = '<h2>The computer chose  ' + computerChoice + '</h2>';
  result.innerHTML = "<h1>" + winner + '</h1>';
}
// this is not displaying the player and computer choices for some reason.....


// document.getElementById('result').innterHTML = '<h2>You chose ' + playerChoice + ' and they played ' + computerChoice + '</h2>';


var checkWinner = function () {
  if(playerChoice === 'rock') {
    if(computerChoice === 'scissors') {
      winner = 'You!';
      playerScore++;
    } else if (computerChoice === 'paper') {
      winner = 'Not you...';
      botScore++;
    } else {
      winner = "'Tis a draw";
    }
  } else if (playerChoice === 'paper') {
    if(computerChoice === 'rock') {
      winner = 'You!';
      playerScore++;
    } else if (computerChoice === 'scissors') {
      winner = 'Not you...';
      botScore++;
    } else {
      winner = "'Tis a draw";
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winner = 'Not you...';
      botScore++;
    } else if (computerChoice === 'paper') {
      winner = 'You!';
      playerScore++;
    } else {
      winner = "'Tis a draw";
    }
  }
displayWinner(); 
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('botScore').innerHTML = botScore;
// Ask about the displayWinner function within the checkWinner function!!!
}


var generateComputerChoice = function() {
  var randNum = getRandomInt(1, 3);
  if(randNum === 1) {
    computerChoice = 'rock';
  } else if (randNum === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  
  checkWinner();
}

// var myArray = ['rock', 'paper', 'scissors']; 
// var generateComputerChoice = function() {
//   return myArray[Math.floor(Math.random() * myArray.length)];
// checkWinner();
// } 
// WHY DOES THIS ONE NOT WORK?


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