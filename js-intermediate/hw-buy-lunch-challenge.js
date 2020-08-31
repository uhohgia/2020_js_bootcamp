/*
You are going to write a function 
which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

The output should be returned from the function and you do not need
alerts, promps or console.log.
The output should match the example output exactly.

Input example
["Angela" , "Ben", "Jenny", "Michael", "Chloe"]

output example
Michael is going to buy lunch today!
*/

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
	var numberofPeople = names.length();

	Math.random(numberofPeople);
	return winnerName + " is going to buy lunch today!";
}

whosPaying();