/**
 209. Minimum Size Subarray Sum :https://leetcode.com/problems/minimum-size-subarray-sum/description/

 problem : Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.


 */
function minsub(arr, k) {
  let minlen = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < arr.length) {
    sum += arr[right];
    while (sum >= target) {
      minlen = Math.min(minlen, right - left + 1);
      sum -= arr[left];
      left++;
    }
    right++;
  }
  return minlen === Infinity ? 0 : minlen;
}
