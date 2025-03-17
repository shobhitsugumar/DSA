//1493. Longest Subarray of 1's After Deleting One Element
/*
Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.*/

/*
solution  : is to do sliding window.

*/
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;

  let zero = 0;
  let max = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zero++;
    }
    while (zero > 1) {
      if (nums[left] === 0) {
        zero--;
      }
      left++;
    }

    max = Math.max(max, right - left);
    right++;
  }
  return max;
};
