//find the peak of the given array

/**
 *162. Find Peak Element :  https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=leetcode-75



 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
