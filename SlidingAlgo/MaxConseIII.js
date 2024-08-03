/*
problem : https://leetcode.com/problems/max-consecutive-ones-iii/description/

1004. Max Consecutive Ones III

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

solution : Better solution : using Slinding window we take right and left and zero 
                             we keep moving the right till the zero is greater than k 
                             if it is greater than k we move the left till left finds 0 ,if nums[left] is 0 then we reduce the zero 
                             if the zero less than k then we move the right 

                            TimeComplexity : O(2n)

           Optimized solution : using the same above method but here instead of shrinking the left till the nums[left] value is zero we just shrik the 
                                left by 1 and move the right 
                            TimeComplexity : O(n)
*/

//solution 1
//[1,1,1,0,0,0,1,1,1,1,0], k = 2

function maxConsecutive(nums, k) {
  let maxlen = 0;
  let left = 0;
  let right = 0;
  let zero = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zero++;
    }
    while (zero > k) {
      if (nums[left] === 0) {
        zero--;
      }
      left++;
    }
    if (zero <= k) {
      maxlen = Math.max(maxlen, right - left + 1);
    }
    right++;
  }
  return maxlen;
}

////////////////////////////////////////////////////////////////////////////////////////////
//solution 2 Optimized way
////[1,1,1,0,0,0,1,1,1,1,0], k = 2

function maxConsecutiveS(nums, k) {
  let left = 0;
  let right = 0;
  let zero = 0;
  let maxlen = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zero++;
    }
    if (zero > k) {
      if (nums[left] === 0) {
        zero--;
      }
      left++;
    }
    if (zero <= k) {
      maxlen = Math.max(maxlen, right - left + 1);
    }
    right++;
  }
}
