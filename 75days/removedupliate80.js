//
//80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
  let count = 1;
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      count = 1;
    } else {
      count++;
    }
    if (count <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

// another solution

var removeDuplicates = function (nums) {
  // intaile check up
  if (nums.length <= 2) return nums.length;

  let writeindex = 2; // we will start to write it from 2nd index

  for (let readindex = 2; readindex < nums.length; readindex++) {
    if (nums[readindex] !== nums[writeindex - 2]) {
      nums[writeindex] = nums[readindex];
      writeindex++;
    }
  }
  return writeindex;
};
