var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var resultBox = document.getElementById('result');
var playerChoiceBox = document.getElementById('playerChoice');
var computerChoiceBox = document.getElementById('computerChoice');

var playerChoice;
var computerChoice;
var winner;

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var displayWinner = function() {
  playerChoiceBox.innerHTML = '<h2>Player Choice: ' + playerChoice + '</h2>';
  computerChoiceBox.innerHTML = '<h2>Computer Choice: ' + computerChoice + '</h2>';
  resultBox.innerHTML = '<h1 class="red">' + winner + ' Wins!!</h1>';
}

var checkWinner = function() {
  if(playerChoice === 'rock') {
    if(computerChoice === 'scissors') {
      winner = 'Player';
    } else if (computerChoice === 'paper') {
      winner = 'Computer';
    } else {
      winner = 'Draw';
    }
  } else if (playerChoice === 'paper') {
    if(computerChoice === 'rock') {
      winner = 'Player';
    } else if (computerChoice === 'scissors') {
      winner = 'Computer';
    } else {
      winner = 'Draw';
    }
  } else if(playerChoice === 'scissors') {
    if(computerChoice === 'paper') {
      winner = 'Player';
    } else if (computerChoice === 'rock') {
      winner = 'Computer';
    } else {
      winner = 'Draw'
    }
  }

  displayWinner();
}

var chooseForComputer = function() {
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

rockBtn.addEventListener('click', function(e) {
  playerChoice = 'rock';
  chooseForComputer();
});

paperBtn.addEventListener('click', function(e) {
  playerChoice = 'paper';
  chooseForComputer();
});

scissorsBtn.addEventListener('click', function(e) {
  playerChoice = 'scissors';
  chooseForComputer();
});