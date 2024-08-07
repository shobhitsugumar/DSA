/*
1358. Number of Substrings Containing All Three Characters : https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb"


solution : we use sliding window if all the three char are there then we find the result 
*/

function Substrings3Char(num) {
  let count = { a: 0, b: 0, c: 0 };
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < num) {
    count[num[right]]++;

    // Check if the current window contains all three characters
    if (count.a > 0 && count.b > 0 && count.c > 0) {
      result += num.length - right;
      count[num[left]]--;
      left++;
    }
    right++;
  }
  return result;
}
