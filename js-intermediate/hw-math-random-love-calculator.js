// Math Random function
/*
Example 1
var n = Math.random();
n = n * 6;
n = Math.floor(n)+1;
console.log(n);

*/
/*
Example 1 : refactor
var n = Math.random();
n = Math.floor(n * 6)+1;
console.log(n);
*/

/**************
Love Calculator
Should have 2 prompts ask for the name of 2 people

Should be able calculate a random number between 1 and 100
Number should be a percetange

Should give percentage back to the user in an alert

***************/

function loveCalculator(){
	var yourName = prompt("What is your name?");
	var crushName = prompt("What is your crush name?");

	var loveScore = Math.random();
	loveScore = Math.floor(loveScore * 100) + 1;

	return alert(yourName + " and " + crushName + " love score is " + loveScore + " %");
}

loveCalculator();





// COURSE ANSWER
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore);

console.log(loveScore)

