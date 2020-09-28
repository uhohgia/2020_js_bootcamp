/*Fibonacci challenge*/

/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones. 

e.g. 0, 1, 1, 2, 3, 5 comes from
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5

Create a function where you can call it by writing the code:
fibonacciGenerator (n)
where "n" is the number of items in the sequence

So I should be able to call:
fibonacciGenerator(3)
and get
[0,1,1]
as the output

IMPORTANT: 
The solution checker is expecting an array  as the correct output.
The result should be returned from the function as an ouput
First 2 numbers of the sequence mus be 0 and 1.
Also, if you decide to create a for  loop, make sure you explicitly specify var i = 0
example: for (var i = 0; i < 10; i ++)

*/

function fibonacciGenerator(n) {
	var output = []; // empty array
	if(n === 1){
		output = [0];
	}else if(n === 2){
		ouput = [0,1];
	}else{
		output = [0,1];
		for(var i = 2; i < n; i++){
			output.push(output[output.length -2] + output[output.length -1]);
		}
	}
	return output;
	console.log(output);
}

fibonacciGenerator(2);