
/*
LEAP YEAR CHALLENGE

Rules:

On every year that is evenly divisible by 4
excpet every year that is evenly divisible by 100
unless the year is also evenly divisible by 400

divisible by 4 = leap year
divisible by 100 = not leap year
except if is divisible by 400 = leap year 

e.g. 
is year 2000 a leap year?
2000 / 4 = 500(leap)
2000 / 100 = 20 (not leap)
2000 / 400 = (LEAP!)
Year 2000 is Leap.
====================
Is year 2100 leap year?
2100 / 4 = 525(leap)
2100 / 100 = 21 (not leap)
2100 / 400 = 5.25 (Not Leap)
Year 2100 is Not Leap.


Ouput 1: Leap year.
Ouput 2: Not leap year.

*/

function isLeap(year){

if((year % 4)&&(year % 100)){
	console.log("Not leap");
}

if((year % 4)&&(year % 100) && (year % 400)){
	console.log("leap!");
}

/*	if(year % 4 ){
		console.log("divisible by 4 is leap");
	}else{
		console.log("not divisible by 4 so is not leap")
	}

	if(year % 100){
		console.log("divisible by 100 is not leap");
	}else{
		console.log("divisible by 100 is leap");
	}

	if(year % 400){
		console.log("divisible by 400 is not leap");
	}else{
		console.log("divisible by 400 is leap!!");
	}
*/
}

isLeap(2400); // Leap year
// isLeap(1989); // Not leap year 
