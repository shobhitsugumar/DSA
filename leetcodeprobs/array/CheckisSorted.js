//problem : 1752. Check if Array Is Sorted and Rotated shttps://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

/*
solution : is to check the breaking point where i > i+1 then we count 1 if there is more than 1 count than its is not sorted 

*/
var check = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count += 1;
    }
  }
  if (count <= 1) {
    return true;
  } else {
    return false;
  }
};
