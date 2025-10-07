//189. Rotate Array
var rotate = function (nums, k) {
  let array = new Array(nums.length).fill(0);

  let rotation = k % nums.length;

  for (let i = 0; i < nums.length; i++) {
    array[(i + rotation) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = array[i];
  }
  return array;
};
