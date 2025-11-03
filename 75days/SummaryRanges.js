var summaryRanges = function (nums) {
  let res = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === nums[i - 1]) {
        res.push(String(start));
      } else {
        res.push(start + "->" + nums[i - 1]);
      }
      start = nums[i];
    }
  }
  return res;
};
