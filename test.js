import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = await rl.question("hello? ");

console.log(userInput);

rl.close();
// return input;

// .then((answer) => {
// console.log(answer);

// rl.close();
// });
//
//
