// 55. Jump Game
var canJump = function (nums) {
  let far = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > far) {
      return false;
    } else {
      far = Math.max(far, i + nums[i]);
    }
  }
  return true;
};
