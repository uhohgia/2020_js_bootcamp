/* 
Create a promtp where user can enter a pharagraph of text.
Dispplay how many characters they have used.
Display how many characters are remaining.

140  total characters
Message example: "You have written 150 characters, you have -10 characters left."
*/

var message = prompt("Please enter your text");
message.length;
var totalCharacters = 140;
var charactersLeft = message.length - totalCharacters;

console.log("You have written " + message.length + " characters," + " you have " + charactersLeft +" characters left.");
