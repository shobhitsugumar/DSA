/***
 problem : 81. Search in Rotated Sorted Array II

 Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

soltuion : is to use binary search 
 */

//solution

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return true;
    }

    // in case if the left and right and the middle are same then we dont know which one is sorted left or right
    // so we move both the left and right one step
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
      continue;
    }

    //checks if left side is sorted
    if (nums[left] <= nums[mid]) {
      //now we check it the target lies in left
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        //target lies in the right
        left = mid + 1;
      }
    } else {
      //this else is for right is sorted

      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
