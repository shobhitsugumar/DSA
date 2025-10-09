// 238. Product of Array Except Self

var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }
  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * suffix;
    suffix = suffix * nums[i];
  }

  return res;
};
