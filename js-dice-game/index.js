// var randomNumber1 = Math.floor(Math.random() * 7 + 1);


// agregar range minimo y maximo
// Porque el +1?
var randomNumber1 = function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + 1;
}
randomNumber1(1,7);

/*
math.floor returns integers
math.random returns a random number between 0 (inclusive),  and 1 (exclusive)
Math.random() always returns a number lower than 1.

Math.random() used with Math.floor() can be used to return random integers.
*/


/*
if randomnumber is equal to 1, 2, 3, 4, 5, 6
change image scr to im1, img,2, img3

Use a switch statement
*/

switch(Number){
	case "img1":
		randomNumber1 = 1;
		document.getElementsByClassName("img1")
		break;
}