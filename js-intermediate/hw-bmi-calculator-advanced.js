/*
Write a function that outputs (returns) a difference message depending on BMI.
BMI < 18.5
Output: "Your BMI is <bmi>, so you are underweight."

BMI 18.5 - 24.9
"Your BMI is <bmi>, so you have a normal weight."

BMI > 24.9
"Your BMI is <bmi>, so you are overweight."

The message MUST be returned as an output from your function.
You should NOT NEED to use alert, prompt or console.log

BMI formula:
Weight / Height power 2

*/

function bmiCalculator(weight, height){
	var bmi = weight / Math.pow(height, 2);
	bmi = Math.round(bmi);

	if(bmi < 18.5){
		var interpretation = "Your BMI is " + bmi + ", " + "so you are underweight.";
	}
	if (bmi > 18.5 && bmi < 24.9){
		var interpretation = "Your BMI is " + bmi + ", " + "so you have a normal weight.";
	}
	if(bmi > 24.9){
		var interpretation = "Your BMI is " + bmi + ", " + "so you are overweight.";
	}

	return interpretation;
}

bmiCalculator(65,1.8);