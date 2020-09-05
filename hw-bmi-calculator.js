/*
Create function that takes weight and height as inputs.
Gives back the calculated BMI value as an output.
Output should be rounded to the nearest whole number.

Fist parameter should be: Weight
Second parameter should be: Height
*/

/* 
If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/

function bmiCalculator(weight, height){
	var bmi = weight/height;
	return Math.floor(bmi);
}

var ouput = bmiCalculator(65, 1.8);
console.log("Answer 1 : " + ouput);


/*
COURSE ANSWER
*/
function bmiCalculator(weight, height){
	var bmi = weight/(height*height);
	return bmi;
}

var ouput = bmiCalculator(65, 1.8);
console.log("Answer 2: "+ ouput);

/*
COURSE ANSWER 2
*/

function bmiCalculator(weight, height){
	var bmi = weight/ Math.pow(height, 2); // Math.pow from JS
	return Math.round(bmi); // Math.round instead of Math.floor
}

var ouput = bmiCalculator(65, 1.8);
console.log("Answer 3: " + ouput);