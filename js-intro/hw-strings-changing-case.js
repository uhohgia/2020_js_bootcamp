/*
Send an Alert
Label: Hello
Fist character of name has to be capitalized
*/

var name = prompt("What is your name?");
var firstLetter = name.slice(0,1).toUpperCase();
var nameLeftover = name.slice(1,10).toLowerCase();
console.log("Hello " + firstLetter + nameLeftover);


/// COURSE ANSWER
var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);

var capitalizedName = upperCaseFirstChar + restOfName;

alert("Hello " + capitalizedName);