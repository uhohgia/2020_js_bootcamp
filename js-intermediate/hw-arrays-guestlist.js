/*
create a function that ask the name of a guest.
compare the name to the list of guest
if guest is in list return welcome message
if guest is not return maybe later message
*/


function party(name){
	var guestlist = ["angie", "jack", "pam", "james", "kris", "joe"];
	if(guestlist.includes(name)){
		console.log("Welcome!");
	}else{
		console.log("Sorry, maybe next time.");
	}
}

party("paola");