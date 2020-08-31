/*
Fizz Buzz
divisible by 3 fizz
divisible by 5 buzz
divisible by 3 and 5 fizz buzz
*/

/*
===== push method
adds an item to an array at the end of the array.

output.push(1);
output.push(2);

===== pop method
removes an item to an array at the end of the array.

output.pop(1);
output.pop(2);

*/ 


/*
Function
*/

var output = [];
var count = 1;

function fizzBuzz(){
if ((count % 3 === 0) && (count % 5 === 0)){
		output.push("fizzBuzz");
	}else if(count % 3 === 0){
		output.push("fizz");
	} else if (count % 5 === 0){
		output.push("buzz");
	}else{
		output.push(count);
	}

	count++;
	console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
