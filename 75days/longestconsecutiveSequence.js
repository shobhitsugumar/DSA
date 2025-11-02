var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentnum = num;
      let length = 1;

      while (set.has(currentnum + 1)) {
        currentnum = currentnum + 1;
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
