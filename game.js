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

  console.log("\n--- New Round ---");
  console.log(`You chose: ${currentHumanChoice}`);
  console.log(`Computer chose: ${currentComputerChoice}`);

  if (currentComputerChoice === currentHumanChoice) {
    console.log("Result: Draw\n");
  } else if (
    (currentHumanChoice === "paper" && currentComputerChoice === "rock") ||
    (currentHumanChoice === "rock" && currentComputerChoice === "scissors") ||
    (currentHumanChoice === "scissors" && currentComputerChoice === "paper")
  ) {
    if (currentComputerChoice === "paper") {
      playerScoreTracker++;
      console.log("Result: You win this round!\n");
    }
  } else {
    computerScoreTracker++;
    console.log("Result: Computer wins this round!\n");
  }
}

//game start
async function playGame() {
  for (let round = 0; round < 5; round++) {
    await playround(getComputerChoice, getHumanChoice);
  }

  console.log("\n=== Game Over ===");
  console.log(
    `Result: ${
      playerScoreTracker > computerScoreTracker ? "You win" : "You lose"
    }`,
  );
  console.log(`Your Score: ${playerScoreTracker}`);
  console.log(`Computer Score: ${computerScoreTracker}`);
  console.log(`Draws: ${5 - (playerScoreTracker + computerScoreTracker)}`);
  console.log("=================\n");

  rl.close();
}

playGame();
