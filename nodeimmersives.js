// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");


const fName = getInput(0);
const lName = getInput(1);
const fullName = fName + " " + lName;
const eMail = fName.toLowerCase() + '.' + lName.toLowerCase() +"@codeimmersives.com";

console.log('Hi, ' + fName + ' ' + lName + "!");
console.log('Your name capitalized is: ' + fName.toUpperCase() + ' ' + lName.toUpperCase() );
console.log('Your initials are : ' + fName[0].toUpperCase() + '.' + lName[0].toUpperCase() + ".");
console.log('Your code Immersives email address is ' + eMail);