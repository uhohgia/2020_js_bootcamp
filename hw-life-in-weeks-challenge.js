/*
Life in weeks coding challenge

Create a function that tells how many days, weeks and months 
we have left until we live 90 years old.

take current age as input

console.log a meesage with the time left in this format:
"You have X days, Y weeks, and Z months left.

Where x, y and z are replaced with the calculated times.

For this challenge, assume there are:
365 days in a year
52 weeks in a year
12 months in a year
*/

function lifeInWeeks(age){
	var maxAge = 90;
	var year = 365;
	var weeks = 52;
	var months = 12;
	// days
	var x = (maxAge*year) - (age*year);
	// weeks
	var y = (maxAge*weeks) - (age*weeks);
	// months
  var z = (maxAge*months) - (age*months);
  // Message
	console.log("You have " + x + " days, " +  y  + " weeks, and " + z + " months left.");
}
lifeInWeeks(51);




/*
COURSE ANSWER
*/

function lifeInWeeksAnswer(age){
	var yearsRemaining = 90 - age;
	var days = yearsRemaining * 365;
	var weeks = yearsRemaining * 52;
	var months = yearsRemaining * 12;

	console.log("You have " + days + " days, " +  weeks  + " weeks, and " + months + " months left.");
}
lifeInWeeksAnswer(51);