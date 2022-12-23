const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
const dateInput = prompt("When does the course start? (Format: YYYY-MM-DD) ");
//I kinda cheated by getting this from stack overflow
const milisecs = 1000 * 60 * 60 * 24; // miliseconds in a day
const timeRemain = Math.ceil((new Date(dateInput.toString()) - new Date().getTime()) / milisecs)
//date input needs to be a string for some reason...

console.log(`Welcome to SALT, ${name}`);
console.log(`Days left until the course starts: ${timeRemain}`);
