import PromptSync from "prompt-sync";

const prompt = PromptSync();

const name = prompt("Hello! what is your name? ");
console.log(`Good morning ${name}`);

console.log(Math.floor(Math.random() * 3) + 1);

// create a variable to store computer choices
// create a function that returns random choices for computer when called
// to refactor it, call the random fuction at the begining of the fuction and save the value in a variable
// then use conditional statement to return a choice based on the random value generated
// doing this helps me aviod global variable
