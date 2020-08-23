/**************
Love Calculator
Should have 2 prompts ask for the name of 2 people
Should be able calculate a random number between 1 and 100
Number should be a percetange
Should give percentage back to the user in an alert

///// Conditionals & Logic
Adding Control Flow to the function.
IF - ELSE - LOGIC
Add ranges for custom messages
Add a custom message depending on the % score.

&& AND Comparator
|| OR 
!  NOT or OPPOSITE

***************/

function loveCalculator(){
	var yourName = prompt("What is your name?");
	var crushName = prompt("What is your crush name?");

	var loveScore = Math.random();
	loveScore = Math.floor(loveScore * 100) + 1;

	if (loveScore > 70){
		alert("Wow " + yourName + " and " + crushName + " love score is " + loveScore + " %");
	}

	if (loveScore > 30 && loveScore <= 70) {
		alert("Just OK " + yourName + " and " + crushName + " love score is " + loveScore + " %");
	}

	if{
		alert("Meh " + yourName + " and " + crushName + " love score is " + loveScore + " %");
	}	
}

loveCalculator();
