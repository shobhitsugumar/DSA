//problem :https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array
/*
16. 3Sum Closest
Medium
Topics
Companies
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


soltuion : is to use three pointer  first we sort the value 

*/

var threeSumClosest = function (nums, target) {
  let closesum = Infinity; // Initialize closest sum to a large value

  nums.sort((a, b) => a - b); // Sort the array for two-pointer approach

  for (let i = 0; i < nums.length - 2; i++) {
    // Loop through the array
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let currentsum = nums[i] + nums[j] + nums[k];

      if (currentsum === target) {
        return currentsum; // If exact match, return immediately
      }

      // Update closest sum if the current one is closer to the target
      if (Math.abs(currentsum - target) < Math.abs(closesum - target)) {
        closesum = currentsum;
      }

      // Move pointers based on comparison with the target
      if (currentsum < target) {
        j++; // Move left pointer to increase the sum
      } else {
        k--; // Move right pointer to decrease the sum
      }
    }
  }

  return closesum; // Return closest sum after checking all combinations
};
