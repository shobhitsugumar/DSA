//169. Majority Element
var majorityElement = function (nums) {
  let count = 0;
  let ele = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ele = nums[i];
      count = 1;
    } else if (nums[i] === ele) {
      count++;
    } else {
      count--;
    }
  }
  return ele;
};
