
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

// COURSE ANSWER

function isLeap(year){
	if(year % 4 === 0){
		console.log("Leap year.");
		if(year % 100 === 0){
			console.log("Not leap year.");
			if(year % 400 === 0){
				console.log("Not lear year.");
			}else{
				console.log("Leap year.");
			}			
		}else{
			console.log("Leap year.");
		}
	}else{
		console.log("Not leap year.");
	}
}

isLeap(2400); // Leap year
isLeap(1989); // Not leap year 
