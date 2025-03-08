//238. Product of Array Except Self
/**
 * we use prefix and suffis solution
 */

var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};
