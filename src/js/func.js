// grab human input
function promptWrapper() {
  // return choice based on input data
  let state = true;
  while (state) {
    const humanChoice = prompt(
      "Pick a choice to proceed: rock[1], paper[2], or scissors[3]? "
    );

    if (humanChoice === "1" || humanChoice.toLowerCase() === "rock") {
      return "rock";
    } else if (
      humanChoice === "2" ||
      humanChoice.toLowerCase() === "paper"
    ) {
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
function getHumanChoice() {
  let inputData = promptWrapper();
  return inputData;
}

//game start
function playGame() {
  for (let round = 0; round < 5; round++) {
    playround(getComputerChoice, getHumanChoice);
  }

  console.log("\n=== Game Over ===");
  console.log(
    `Result: ${
      playerScoreTracker > computerScoreTracker
        ? "You win"
        : "You lose"
    }`
  );
  console.log(`Your Score: ${playerScoreTracker}`);
  console.log(`Computer Score: ${computerScoreTracker}`);
  console.log(
    `Draws: ${5 - (playerScoreTracker + computerScoreTracker)}`
  );
  console.log("=================\n");
}
