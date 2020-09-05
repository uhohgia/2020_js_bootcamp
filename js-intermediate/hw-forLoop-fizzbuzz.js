// fizz buzz with foor loop

var output = []; // empty so it prints array in the console log
function fizzBuzz(){
	for(count = 1;  count <= 100; count++){
		if ((count % 3 === 0) && (count % 5 === 0)){
				output.push("fizzBuzz");
			}else if(count % 3 === 0){
				output.push("fizz");
			} else if (count % 5 === 0){
				output.push("buzz");
			}else{
				output.push(count);
			}
	}
	console.log(output);
}
fizzBuzz();