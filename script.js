// computerPlay:

function computerPlay() {
  // generate random number between 0 - 2

  let randomNum = Math.floor(Math.random() * 3)

  // return string (R/P/S) relative to random number

  if (randomNum == 0) {
    return "ROCK";
  } else if (randomNum == 1) {
    return "SCISSORS";
  } else {
    return "PAPER";
  }
}

// playRound(playerSelection, computerSelection):
let playerCurrentScore = 0;
let computerCurrentScore = 0;

function playRound(playerSelection) {
  // prompt user for input and save to javascript

  playerSelection = playerSelection;
  computerSelection = computerPlay();

  console.log(playerSelection);
  console.log(computerSelection);

// loop through all possible combinations and return results

  if (playerSelection === computerSelection) {
    resultStatement.textContent = "It's a tie!";
    return "tie";
  }

  if (playerSelection === "ROCK") {
    if (computerSelection === "SCISSORS") {
      resultStatement.textContent = "You win! Rock beats scissors!";
      playerCurrentScore++;
    } else {
      resultStatement.textContent = "You lose... Paper beats rock.";
      computerCurrentScore++;
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "PAPER") {
      resultStatement.textContent = "You win! Scissors beats paper!";
      playerCurrentScore++;
    } else {
      resultStatement.textContent = "You lose... Rock beats scissors.";
      computerCurrentScore++;
    }
  } else {
    if (computerSelection === "ROCK") {
      resultStatement.textContent = "You win! Paper beats rock!";
      playerCurrentScore++;
    } else {
      resultStatement.textContent = "You lose... Scissors beats paper";
      computerCurrentScore++;
    }
  }

  if (playerCurrentScore === 5 || computerCurrentScore === 5) {

    if (playerCurrentScore === 5) {
      resultFinal.textContent = "You win!!"
    } else {
      resultFinal.textContent = "You lose!"
    }
    playerCurrentScore = 0;
    computerCurrentScore = 0;
  }
}

// UI - buttons start game.

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function() {
  let = result = playRound("ROCK");

  playerScore.textContent = playerCurrentScore
  computerScore.textContent = computerCurrentScore;

});
paperButton.addEventListener("click", function() {
  let = result = playRound("PAPER");

  playerScore.textContent = playerCurrentScore
  computerScore.textContent = computerCurrentScore;

});
scissorsButton.addEventListener("click", function() {
  let = result = playRound("SCISSORS");

  playerScore.textContent = playerCurrentScore
  computerScore.textContent = computerCurrentScore;

});

// return results in div

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resultStatement = document.querySelector("#result-statement");
const resultFinal = document.querySelector("#result-final");
