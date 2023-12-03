/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// Check Palindrome
// console.log(isPalindrome("Nan")); // true

module.exports = isPalindrome;
