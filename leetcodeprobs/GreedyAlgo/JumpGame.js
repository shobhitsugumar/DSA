/**
 problem :  55. Jump Game
https://leetcode.com/problems/jump-game/description/


solution : we take a maxindex as 0 so if i cross the maxindex then we return false if maxindex reaches the end then we return true

problem 
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last inde
 */

function jumpgame(arr) {
  let maxindex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > maxindex) return false;
    maxindex = Math.max(maxindex, i + arr[i]);
  }
  return true;
}
