/*

424. Longest Repeating Character Replacement :https://leetcode.com/problems/longest-repeating-character-replacement/description/

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.


*/

function longestReplaceChar(num) {
  let left = 0;
  let right = 0;
  let maxlength = 0;
  let maxfrequeny = 0;
  let count = {};

  while (right < num.length) {
    //adding the value in obj to keep track of the char frequency
    count[num[right]] = (count[num[right]] || 0) + 1;

    maxfrequeny = Math.max(maxfrequeny, count[num[right]]);

    //this is to check if there are values to get replace are less than k
    if (right - left + 1 - maxfrequeny > k) {
      //move the left and elemenate the left value
      count[num[left]]--;
      left++;
    }

    maxlength = Math.max(maxlength, right - left + 1);
    right++;
  }
  return maxlength;
}
