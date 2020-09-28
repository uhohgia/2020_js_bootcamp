/**
 * @param {string} name

Get last character
Complete the function getLastCharacter such that it returns the last character of the name it receives.

Character access
 Combining it with length
You can also combine the character access with the .length property. So using the same language variable, here's how you get the second to last character from it:

language[ language.length - 2 ]; // "p" because it's the second to last character from "JavaScript"
Note that language[ language.length ] will be undefined because character access starts at 0.
So for a string of 9 characters, 8 is the position of the last character.
 */
function getLastCharacter(name){
  var lastCharacter = name[name.length - 1 ];
  return lastCharacter;
}

//sample usage
console.log(getLastCharacter("John"));
console.log(getLastCharacter("Jennifer"));