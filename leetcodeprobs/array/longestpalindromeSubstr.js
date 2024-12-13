//find the longest palindrome substring https://leetcode.com/problems/longest-palindromic-substring/description/

/*
soltuion : brute force : use two for loop 
*/

//brute force
function longestPalindrom(str) {
  let result = "";
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let substring = str.substring(i, j + 1);
      if (isPalindrome(substring) && substring.length > max) {
        result = substring;
        max = substring.length;
      }
    }
  }
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
