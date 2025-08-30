const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log(`hello ${name}`);

console.log(typeof name);

const newName = "hello";

let ola = "my name";

console.log(`${newName}!, ${ola} is ola`);
