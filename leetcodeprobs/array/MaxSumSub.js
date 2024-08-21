/**
 problem : 53. Maximum Subarray:https://leetcode.com/problems/maximum-subarray/description/

 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

solution : is to use Kadanes algo 
           The intuition of the algorithm is not to consider the subarray as a part of the answer if its sum is less than 0. 
           i.e if the current subarray has negative sum we dont consider that because adding id doesnt make any sense 
           Time Complexity : O(n) 
           space Comaplexity  O(1 )
 */

/// the output would be 6
function Maxsum(arr) {
  let max = Number.MIN_SAFE_INTEGER; // -900090......
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
    }
    //neglating the subarray where theyare sum is less than 0
    if (sum < 0) {
      sum = 0;
    }
  }
  // To consider the sum of the empty subarray
  // if all elements in the array are negative, the algorithm would return the largest negative number
  //Sometimes, you might want to consider the sum of the "empty subarray," which is technically 0.
  //This concept is particularly useful when an array consists entirely of negative numbers, and you prefer to return 0
  //instead of the maximum negative number (since no subarray is actually "better" than having an empty one).
  if (max < 0) {
    max = 0;
  }
  return max;
}

//incase if we need to return the subarry of that max

function Maxsum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let arrstart = -1;
  let arrend = -1;

  for (let i = 0; i < arr.length; i++) {
    //we check if the sum is 0 we assign it as start
    if (sum === 0) {
      start = i;
    }

    sum += arr[i];

    if (sum > max) {
      max = sum;
      arrstart = start;
      arrend = i;
    }

    //we negalete subaray which is less than 0
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
