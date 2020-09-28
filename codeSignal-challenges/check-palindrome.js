/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.

====== Input/Output ====== 

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.

====== PALINDROME ======
A string that doesn't changed when reversed (it reads the same backward and forward).

Examples:

"eye" is a palindrome
"noon" is a palindrome
"decaf faced" is a palindrome
"taco cat" is not a palindrome (backwards it spells "tac ocat")
"racecars" is not a palindrome (backwards it spells "sracecar")

*/

function checkPalindrome(inputString) {
    var re = /[\W_]/g;
    var lowRegStr = inputString.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
