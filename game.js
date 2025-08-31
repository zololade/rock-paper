import readline from "node:readline/promises";

// Create an interface for input and output

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// store wins record
let playerScoreTracker = 0;
let computerScoreTracker = 0;

// grab human input
async function rlWrapper() {
  // return choice based on input data
  let state = true;
  while (state) {
    const humanChoice = await rl.question(
      "Pick a choice to proceed: rock[1], paper[2], or scissors[3]? ",
    );

    if (humanChoice === "1" || humanChoice.toLowerCase() === "rock") {
      return "rock";
    } else if (humanChoice === "2" || humanChoice.toLowerCase() === "paper") {
      return "paper";
    } else if (
      humanChoice === "3" ||
      humanChoice.toLowerCase() === "scissors"
    ) {
      return "scissors";
    } else {
      console.log("Invalid choice, try again.");
    }
  }
}

//get human choice
async function getHumanChoice() {
  let inputData = await rlWrapper();
  return inputData;
}

// add logic to get human choice
function getComputerChoice() {
  // create a variable to store random choice
  const decisionMaker = Math.floor(Math.random() * 3) + 1;

  // write a conditional statement to make decision based on random choice
  if (decisionMaker === 1) {
    return "scissors";
  } else if (decisionMaker === 2) {
    return "paper";
  } else {
    return "rock";
  }
}

// create a function that play rounds and output current record
async function playround(computerChoice, humanChoice) {
  const currentComputerChoice = computerChoice();
  const currentHumanChoice = await humanChoice();

  if (currentComputerChoice === currentHumanChoice) {
    console.log("draw");
  } else if (
    (currentHumanChoice === "rock" || currentHumanChoice === "paper") &&
    (currentComputerChoice === "rock" || currentComputerChoice === "paper")
  ) {
    if (currentComputerChoice === "paper") {
      computerScoreTracker++;
      console.log("computer win this round");
    } else {
      playerScoreTracker++;
      console.log("you win");
    }
  } else if (
    (currentHumanChoice === "scissors" || currentHumanChoice === "rock") &&
    (currentComputerChoice === "scissors" || currentComputerChoice === "rock")
  ) {
    if (currentComputerChoice === "rock") {
      computerScoreTracker++;
      console.log("computer win this round");
    } else {
      playerScoreTracker++;
      console.log("you win");
    }
  } else if (
    (currentHumanChoice === "paper" || currentHumanChoice === "scissors") &&
    (currentComputerChoice === "paper" || currentComputerChoice === "scissors")
  ) {
    if (currentComputerChoice === "scissors") {
      computerScoreTracker++;
      console.log("computer win this round");
    } else {
      playerScoreTracker++;
      console.log("you win");
    }
  }
}

//game start
async function playGame() {
  for (let round = 0; round < 5; round++) {
    await playround(getComputerChoice, getHumanChoice);
  }
  rl.close();
}

playGame();
