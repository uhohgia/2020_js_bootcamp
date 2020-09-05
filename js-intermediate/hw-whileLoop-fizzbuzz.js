// Fizz Buzz game with while loops

var output = []; // empty so it prints array in the console log
var count = 1;

function fizzBuzz(){
	while(count <=100){
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
	}
	console.log(output);
}

fizzBuzz();