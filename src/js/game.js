// store wins record
let playerScoreTracker = 0;
let computerScoreTracker = 0;
let button = document.querySelectorAll("button");
let scoreField = document.querySelector(".comment");
let compScore = document.querySelector(".computer-score");
let playerScore = document.querySelector(".your-score");
let gameOver = false;
let timeOut;

// add logic to get computer choice
function getComputerChoice() {
  // create a variable to store random choice
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  // write a conditional statement to make decision based on random choice
  if (randomChoice === 1) {
    return "scissors";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "rock";
  }
}

// create a function that play rounds and output current record
function playround(getComputerChoiceFn, humanChoice) {
  const currentComputerChoice = getComputerChoiceFn();
  const currentHumanChoice = humanChoice;

  if (currentComputerChoice === currentHumanChoice) {
    scoreField.textContent = "It's a tie";
  } else if (
    (currentHumanChoice === "paper" &&
      currentComputerChoice === "rock") ||
    (currentHumanChoice === "rock" &&
      currentComputerChoice === "scissors") ||
    (currentHumanChoice === "scissors" &&
      currentComputerChoice === "paper")
  ) {
    playerScoreTracker++;
    scoreField.textContent = "You win this round!";
  } else {
    computerScoreTracker++;
    scoreField.textContent = "Computer wins this round!";
  }
  gameStatus();
}

//get Human Choice
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let humanInput = e.currentTarget.dataset.choice;
    let resetGameBtn = e.currentTarget.dataset.restart;
    e.preventDefault();

    if (resetGameBtn) {
      resetGame();
      return;
    }
    if (!humanInput) return;
    if (gameOver) return;

    playround(getComputerChoice, humanInput.toLowerCase());
    if (playerScoreTracker === 5 || computerScoreTracker === 5) {
      gameOver = true;
      timeOut = setTimeout(printGameOver, 1000);
    }
  });
});

function gameStatus() {
  if (playerScoreTracker === computerScoreTracker) {
    playerScore.textContent = "Draw";
    compScore.textContent = "Draw";
    return;
  }
  playerScore.textContent = `You have ${playerScoreTracker} points`;
  compScore.textContent = `Computer has ${computerScoreTracker} points`;
}

function resetGame() {
  clearTimeout(timeOut);
  playerScoreTracker = 0;
  computerScoreTracker = 0;
  gameOver = false;
  playerScore.textContent = "You: 0";
  compScore.textContent = "Computer: 0";
  scoreField.textContent = "New game started!";
}

function printGameOver() {
  playerScore.textContent = "";
  compScore.textContent = "Game over";
  scoreField.textContent = "Press restart to try again!";
}
