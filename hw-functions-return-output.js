/*
Challenge
Take money instead of bottles.
Calculate the number of bottles the robot is able to buy.

bottle of milk cost: 1.5 dollars

Return the change of the milk purchase using return to output the amount
*/
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money/1.5);
  console.log("buy " + numberOfBottles + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5; // Remainder
}

var change = getMilk(4);
console.log("You have " + change + " dollars change back");