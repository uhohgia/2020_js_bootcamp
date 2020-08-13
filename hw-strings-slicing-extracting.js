/* 
Create a promtp where user can enter a pharagraph of text.
140  total characters
Add slice(x,y) to cut the message up to 140 characters.
*/

var message = prompt("Please enter your text");
var totalMessage = message.slice(0,140);

alert(totalMessage);


/////// COURSE ANSWER
var tweet = prompt("Please enter your tweet");
alert(tweet.slice(0,140));
