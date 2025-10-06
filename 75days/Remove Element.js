//https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
var removeElement = function (nums, val) {
  let last = nums.length - 1;

  let start = 0;

  while (start <= last) {
    if (nums[start] === val) {
      let temp = nums[start];
      nums[start] = nums[last];
      nums[last] = temp;

      last--;
    } else {
      start++;
    }
  }
  return last + 1;
};
