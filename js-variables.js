/*
Rules:
Given the existing code below, can you write some code so that their values are switched around?
    var a = "3";
    var b = "8";

So that the variable a holds the value "8".
And the variable b holds the value "3".

NOT change any of the existing code.
NOT allowed to type any numbers
NOT redeclare the variables a and b. 
*/


function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
a = b;
var c = prompt("add a value");
b = c;

// Made a prompt instead of variable, didn't understand the "rules" of not repeating variables. They actually allowed to "create new variables".

// Course answer
var c = a;
a = b;
b = c;

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
