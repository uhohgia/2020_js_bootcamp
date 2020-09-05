// 99 bottles of beer

/*
Use a while loop and print on console the following lyrics.

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

decrement value to

No more bottles of beer on the wall, no more bottles of beer.
Go the store and buy some more, 99 bottles of beer on the wall.
*/

// declare initial value
var bottles = 99;

while(bottles >= 0) /* do something if statement is true*/{
	console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer."); 
	bottles--;
	console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
}



// COURSE ANSWER

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}