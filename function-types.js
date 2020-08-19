// Functions

/*Type 1 : simple function */
function getMilk() {   
  console.log("Say something");
}

getMilk();


/*
Type 2 : Adding parameter
Parameter in paranthesis is a variable
*/
function getMilk(bottles) {   
  var cost = bottles * 1.5;
}

/*
Value in parenthesis are called arguments
Value replaces "parameter variable in function"
*/
getMilk(2);
