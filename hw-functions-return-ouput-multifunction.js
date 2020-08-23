/*
Challenge
Take money instead of bottles.
Calculate the number of bottles the robot is able to buy.
Bottle of milk cost: 1.5 dollars
Return the change of the milk purchase using return to output the amount
*/


// Use arguments and parameters to replace values in function.

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calculateBottles(money, costPerBottle) + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calculateChange(money, costPerBottle);
}


/*
Use the output of 2 functions inside of other lines of code
*/

function calculateBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney/costPerBottle);
  return numberOfBottles;
}

function calculateChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello master here is your " + getMilk(5, 1.5) + " change.");


